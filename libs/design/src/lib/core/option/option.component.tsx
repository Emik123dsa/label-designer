import * as React from 'react';

/**
 * Input Synthetic Event.
 *
 * @export
 * @interface InputSyntheticEvent
 * @template T
 */
export interface OptionSyntheticEvent<T = unknown> {
  value: T;
  label: string | undefined;
  code: string | undefined;
}

/**
 * Option Props.
 *
 * @export
 * @interface OptionProps
 */
export interface OptionProps {
  value?: unknown;
  label: string | undefined;
  code: string | undefined;
  onClick?: (event: OptionSyntheticEvent) => void;
}

/**
 * Option Helper Component.
 *
 * @export
 * @class Option
 * @extends React.PureComponent<OptionProps>
 */
export class Option extends React.PureComponent<OptionProps> {
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

  /**
   * Creates an instance of Option.
   *
   * @param  {Readonly<OptionProps>} props
   * @memberof Option
   */
  public constructor(props: Readonly<OptionProps>) {
    super(props);

    this._handleOptionEvent = this._handleOptionEvent.bind(this);
  }

  /**
   *  Render Option Component.
   * @memberof Option
   */
  public override render(): JSX.Element {
    const { value }: OptionProps = this.props;
    return (
      <li
        data-value={value}
        aria-label="option"
        onClick={this._handleOptionEvent}
      >
        {this._renderChildrenRef()}
      </li>
    );
  }

  /**
   * Handle Option Event.
   *
   * @private
   * @param  {React.MouseEvent<HTMLElement>} event
   * @return {void}
   * @memberof Option
   */
  private _handleOptionEvent(event: React.MouseEvent<HTMLElement>): void {
    event.persist();

    const { value, label, code }: Readonly<OptionProps> = this.props;
    if (this.props.onClick && this.props.onClick instanceof Function) {
      const isValidOptionEvent: Readonly<boolean> = [code, label].every?.(
        (option) => !!option
      );
      if (isValidOptionEvent) this.props.onClick({ value, label, code });
    }
  }
}
