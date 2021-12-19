import React, { ReactNode } from 'react';
import classnames from 'classnames';
import { Observable, Subject } from 'rxjs';

import type { A11yAriaAttrs } from '../core/a11y';

import './input.component.scss';

let nextUniqueId = 0;

export type InputPropsType = 'text' | 'phone' | 'email' | 'password';

export type InputPropsSimpleValue = string | number | symbol;

/* eslint-disable-next-line */
export type InputState = {};

export type InputClickEvent = React.MouseEvent<HTMLInputElement>;

export type InputNativeEvent = React.FormEvent<HTMLInputElement> &
  React.BaseSyntheticEvent<HTMLInputElement>;

/**
 * Input Synthetic Event.
 *
 * @export
 * @interface InputSyntheticEvent
 * @template T
 */
export interface InputSyntheticEvent<T = unknown> {
  value: T;
  label: string | undefined;
  code: string | undefined;
}

/* eslint-disable-next-line */
export interface InputProps extends Partial<A11yAriaAttrs> {
  id?: string;
  name?: string;
  type?: InputPropsType;
  value?: InputPropsSimpleValue;
  readonly?: boolean;
  autocapitalize?: 'off' | 'on';
  autocomplete?: 'off' | 'on';
  placeholder?: string;
  focused?: boolean;
  disabled?: boolean;
  required?: boolean;
  onInput?: (event: InputSyntheticEvent) => void;
  onClick?: (event: InputClickEvent) => void;
}

export const INPUT_PROPS_FACTORY: () => InputProps =
  (): Readonly<InputProps> => ({
    type: 'text',
    placeholder: '',
    autocomplete: 'off',
    autocapitalize: 'off',
    readonly: false,
    disabled: false,
    ariaHasPopUp: false,
    ariaActivedescendant: Input.displayName,
    ariaOwns: Input.displayName,
  });

/**
 * Abstract Input Implementation.
 *
 * @export
 * @abstract
 * @class AbstractInput
 * @extends React.PureComponent<P, S>
 * @template P
 * @template S
 */
export abstract class AbstractInput<
  P = InputProps,
  S = InputState
> extends React.PureComponent<P, S> {
  /**
   * Protected render children ref.
   *
   * @protected
   * @return React.Component<unknown, unknown>[]
   * @memberof AbstractInput
   */
  protected _renderChildrenRef(): React.Component<unknown, unknown>[] {
    const children: React.Component = this.props.children as React.Component<
      unknown,
      unknown
    >;
    // @internal render children with refs.
    return React.Children.map(
      children,
      (child: React.Component<unknown, unknown>) => child
    );
  }
}

/**
 * Input Custom Component.
 *
 * @export input as a input component.
 * @class input
 * @extends PureComponent<InputProps, inputState>
 */
export class Input extends AbstractInput<InputProps> {
  private static readonly HYPHEN_SYMBOL: string = '-';

  private readonly _stateChanges: Subject<void> = new Subject<void>();

  public readonly stateChanges: Observable<void> =
    this._stateChanges.asObservable();

  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  public static displayName: string = `input-${++nextUniqueId}`;

  /**
   * Default props factory.
   *
   * @static
   * @type Readonly<inputProps>
   * @memberof Input
   */
  public static defaultProps: Readonly<InputProps> = INPUT_PROPS_FACTORY();

  /**
   * Creates an instance of Input.
   * @param  {Readonly<InputProps>} props
   * @memberof Input
   */
  public constructor(props: Readonly<InputProps>) {
    super(props);
    // @internal click handler.
    this._handleClickEvent = this._handleClickEvent.bind(this);
    this._handleInputEvent = this._handleInputEvent.bind(this);
  }

  /**
   * Handle all input events in the stream.
   *
   * @private
   * @param  {InputNativeEvent} event
   * @return {void}@memberof Input
   */
  private _handleInputEvent(event: InputNativeEvent): void {
    event.persist();

    if (this.props?.onInput && this.props?.onInput instanceof Function) {
      const { value }: HTMLInputElement = event.target;
      const { id: code, name: label }: Readonly<InputProps> = this.props;
      const isValidEvent: Readonly<boolean> = [code, label].every?.(
        (value) => !!value
      );
      if (isValidEvent) {
        this.props.onInput({
          value,
          code,
          label,
        });
        this._stateChanges.next();
      }
    }
  }

  /**
   * Handle all click events in the stream of changes.
   *
   * @private
   * @param  {InputClickEvent} event
   * @return {void}
   * @memberof Input
   */
  private _handleClickEvent(event: InputClickEvent): void {
    event.persist();
    event.preventDefault();

    if (this.props.onClick && this.props.onClick instanceof Function) {
      this.props.onClick(event);
      this._stateChanges.next();
    }
  }

  public componentWillUnmount() {
    if (this._stateChanges) {
      this._stateChanges.next();
      this._stateChanges.complete();
    }
  }

  /**
   * Label wrapper for form field.
   *
   * @static method of input wrapper.
   * @memberof Input
   */
  public static Label = class extends AbstractInput<
    Pick<InputProps, 'id'>,
    unknown
  > {
    /**
     * Render label by form field.
     */
    public override render(): JSX.Element {
      const { id }: Pick<InputProps, 'id'> = this.props;
      return <label htmlFor={id}> {super._renderChildrenRef()}</label>;
    }
  };

  /**
   * Render Native input Element Ref.
   *
   * @private method for render.
   * @return (JSX.Element | null)
   * @memberof input of render input method.
   */
  private _renderNativeInputElementRef(): JSX.Element | null {
    // @internal all props of input.
    const {
      id,
      name,
      type,
      value,
      readonly,
      disabled,
      required,
      ariaLabel,
      ariaHidden,
      ariaHasPopUp,
      ariaOwns,
      ariaActivedescendant,
      placeholder,
      autocomplete,
      autocapitalize,
    }: Readonly<InputProps> = this.props;

    return (
      <input
        id={id || nextUniqueId.toString()}
        name={name || Input.displayName}
        className={classnames('input', {
          [['input', type].join(Input.HYPHEN_SYMBOL)]: true,
        })}
        aria-haspopup={ariaHasPopUp}
        aria-activedescendant={ariaActivedescendant}
        aria-owns={ariaOwns}
        type={type}
        disabled={disabled}
        required={required}
        readOnly={readonly}
        value={value as string}
        maxLength={10}
        autoCapitalize={autocapitalize}
        placeholder={placeholder}
        autoComplete={autocomplete}
        onClick={this._handleClickEvent}
        onInput={this._handleInputEvent}
        aria-label={ariaLabel || Input.displayName}
        aria-hidden={ariaHidden || disabled}
      >
        {super._renderChildrenRef()}
      </input>
    );
  }

  /**
   * Render Input Elements Refs.
   *
   * @throws InputPropsTagNotFoundException if tag was not supported by provider.
   * @memberof input
   */
  public override render(): JSX.Element | null {
    return this._renderNativeInputElementRef();
  }
}
