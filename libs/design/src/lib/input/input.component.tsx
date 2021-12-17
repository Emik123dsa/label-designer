import React from 'react';
import classnames from 'classnames';
import { Observable, Subject } from 'rxjs';

import type { A11yAriaAttrs } from '../core/a11y';

import './input.component.scss';

export type UnknownComponent = React.Component<unknown, unknown>;

let nextUniqueId = 0;

export type InputPropsType = 'text' | 'phone' | 'email' | 'password';

export type InputPropsSimpleValue = string | number | symbol;

/* eslint-disable-next-line */
export interface InputProps extends Partial<A11yAriaAttrs> {
  id?: string;
  name?: string;
  type?: InputPropsType;
  value?: InputPropsSimpleValue;
  readonly?: boolean;
  placeholder?: string;
  disabled?: boolean;
}

export const INPUT_PROPS_FACTORY: () => InputProps =
  (): Readonly<InputProps> => ({
    type: 'text',

    disabled: false,
  });

/* eslint-disable-next-line */
export type inputState = {};

export type InputClickEvent =
  | React.MouseEvent<HTMLInputElement>
  | React.MouseEventHandler<HTMLLabelElement>;

export type InputNativeEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEventHandler<HTMLLabelElement>;

/**
 * input Custom Component.
 *
 * @export input as a input component.
 * @class input
 * @extends PureComponent<inputProps, inputState>
 */
export class Input extends React.PureComponent<inputProps, inputState> {
  private static readonly HYPHEN_SYMBOL: string = '-';

  private readonly _stateChanges: Subject<void> = new Subject<void>();

  public readonly stateChanges: Observable<void> =
    this._stateChanges.asObservable();

  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  public static defaultName: string = `input-${++nextUniqueId}`;

  /**
   * Default props factory.
   *
   * @static
   * @type Readonly<inputProps>
   * @memberof input
   */
  public static defaultProps: Readonly<inputProps> = input_PROPS_FACTORY();

  public constructor(props: Readonly<inputProps>) {
    super(props);
    // @internal click handler.
    this._handleClickEvent = this._handleClickEvent.bind(this);
  }

  private _handleInputEvent(event: React);
  private _handleClickEvent(event: inputClickEvent): void {
    this._stateChanges.next();
  }

  public componentWillUnmount() {
    this._stateChanges.next();
    this._stateChanges.complete();
  }

  private _renderChildrenRef(): UnknownComponent[] {
    const children: React.Component = this.props.children as UnknownComponent;
    // @internal render children with refs.
    return React.Children.map(children, (child: UnknownComponent) => child);
  }

  /**
   *  Render Native input Element Ref.
   *
   * @private method for render.
   * @return (JSX.Element | null)
   * @memberof input of render input method.
   */
  private _renderNativeInputElementRef(): JSX.Element | null {
    const {
      id,
      name,
      type,
      color,
      disabled,
      ariaLabel,
      ariaHidden,
    }: Readonly<inputProps> = this.props;

    return (
      <input
        id={id || nextUniqueId.toString()}
        name={name || input.defaultName}
        className={classnames('btn', 'btn-block', {
          [['btn', color].join(input.HYPHEN_SYMBOL)]: true,
        })}
        type={type}
        disabled={disabled}
        aria-label={ariaLabel || Input.defaultName}
        aria-hidden={ariaHidden || disabled}
      >
        {this._renderChildrenRef()}
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
