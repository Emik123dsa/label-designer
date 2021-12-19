import React from 'react';
import classnames from 'classnames';
import { Observable, Subject } from 'rxjs';

import type { A11yAriaAttrs } from '../core/a11y';

import './button.component.scss';

type UnknownComponent = React.Component<unknown, unknown>;

let nextUniqueId = 0;

/**
 * Button Props Type.
 *
 * @external type props type.
 */
export type ButtonPropsType = 'reset' | 'submit' | 'button';

export const BUTTON_VALID_TYPES: ButtonPropsType[] = [
  'reset',
  'submit',
  'button',
];

/**
 * Button Props Tag.
 *
 * @external type props tag.
 */
export type ButtonPropsTag = 'a' | 'link' | 'button';

// @internal enums tag resolver.
enum ButtonPropsTagType {
  ANCHOR = 'a',
  LINK = 'link',
  BUTTON = 'button',
}

export class ButtonPropsTagNotFoundException extends Error {}

export const BUTTON_VALID_TAGS: ButtonPropsTag[] = ['a', 'button'];

/**
 * Button Props Color.
 *
 * @external type props color.
 */
export type ButtonPropsColor = 'primary' | 'secondary';

export const BUTTON_VALID_COLORS: ButtonPropsColor[] = ['primary', 'secondary'];

/**
 * Button Props Size.
 *
 * @external type props size.
 */
export type ButtonPropsSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const BUTTON_VALID_SIZES: ButtonPropsSize[] = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
];

/* eslint-disable-next-line */
export interface ButtonProps extends Partial<A11yAriaAttrs> {
  id?: string;
  name?: string;
  type?: ButtonPropsType;
  tag: ButtonPropsTag;
  color: ButtonPropsColor;
  size: ButtonPropsSize;
  disabled?: boolean;
}

export const BUTTON_PROPS_FACTORY: () => ButtonProps =
  (): Readonly<ButtonProps> => ({
    type: 'button',
    tag: 'button',
    color: 'primary',
    size: 'sm',
    disabled: false,
  });

/* eslint-disable-next-line */
export type ButtonState = {};

export type ButtonClickEvent =
  | React.MouseEvent<HTMLButtonElement>
  | React.MouseEventHandler<HTMLAnchorElement>;

/**
 * Button Custom Component.
 *
 * @export Button as a button component.
 * @class Button
 * @extends PureComponent<ButtonProps, ButtonState>
 */
export class Button extends React.PureComponent<ButtonProps, ButtonState> {
  private static readonly HYPHEN_SYMBOL: string = '-';

  private readonly _stateChanges: Subject<void> = new Subject<void>();

  public readonly stateChanges: Observable<void> =
    this._stateChanges.asObservable();

  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  public static displayName: string = `button-${++nextUniqueId}`;

  /**
   * Default props factory.
   *
   * @static
   * @type Readonly<ButtonProps>
   * @memberof Button
   */
  public static defaultProps: Readonly<ButtonProps> = BUTTON_PROPS_FACTORY();

  public constructor(props: Readonly<ButtonProps>) {
    super(props);
    // @internal click handler.
    this._handleClickEvent = this._handleClickEvent.bind(this);
  }

  private _handleClickEvent(event: ButtonClickEvent): void {
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
   * TODO: implement link element refs.
   *
   * @private
   * @return JSX.Element
   * @memberof Button
   */
  private _renderLinkElementRef(): JSX.Element | null {
    return null;
  }

  /**
   * TODO: implement anchor element refs.
   *
   * @private
   * @return JSX.Element
   * @memberof Button
   */
  private _renderAnchorElementRef(): JSX.Element | null {
    return null;
  }

  /**
   *  Render Native Button Element Ref.
   *
   * @private method for render.
   * @return (JSX.Element | null)
   * @memberof Button of render button method.
   */
  private _renderNativeButtonElementRef(): JSX.Element | null {
    const {
      id,
      name,
      type,
      color,
      disabled,
      ariaLabel,
      ariaHidden,
    }: Readonly<ButtonProps> = this.props;

    return (
      <button
        id={id || nextUniqueId.toString()}
        name={name || Button.displayName}
        className={classnames('btn', 'btn-block', {
          [['btn', color].join(Button.HYPHEN_SYMBOL)]: true,
        })}
        type={type}
        disabled={disabled}
        aria-label={ariaLabel || Button.displayName}
        aria-hidden={ariaHidden || disabled}
      >
        {this._renderChildrenRef()}
      </button>
    );
  }

  /**
   * Render Button Elements Refs.
   *
   * @throws ButtonPropsTagNotFoundException if tag was not supported by provider.
   * @memberof Button
   */
  public override render(): JSX.Element | null {
    const { tag }: Readonly<ButtonProps> = this.props;
    switch (tag) {
      case ButtonPropsTagType.LINK:
        return this._renderLinkElementRef();
      case ButtonPropsTagType.ANCHOR:
        return this._renderAnchorElementRef();
      case ButtonPropsTagType.BUTTON:
        return this._renderNativeButtonElementRef();
      default:
        throw new ButtonPropsTagNotFoundException(tag);
    }
  }
}
