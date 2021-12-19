import React from 'react';
import {
  filter,
  fromEvent,
  merge,
  Observable,
  skipWhile,
  Subject,
  Subscription,
  tap,
} from 'rxjs';
import classnames from 'classnames';
import {
  Input,
  InputProps,
  InputClickEvent,
  AbstractInput,
} from '../input/input.component';

import { MdOutlineArrowDropDown as SelectDropDownIcon } from 'react-icons/md';

import './select.component.scss';

let nextUniqueId = 0;

/**
 * Select State.
 *
 * @export
 * @interface SelectState
 */
export interface SelectState {
  isSelectOpened: boolean;
  isOptionSelected: boolean;
}

/* eslint-disable-next-line */
export interface SelectProps extends InputProps {}

export const SELECT_PROPS_FACTORY: () => SelectProps = () => ({
  type: 'text',
  placeholder: '',
  autocomplete: 'off',
  autocapitalize: 'off',
  disabled: false,
});

export abstract class SelectClickOutside extends AbstractInput<
  SelectProps,
  SelectState
> {
  protected _subscription: Subscription | null = new Subscription();
  /**
   * Subscribe to the event select listener.
   * Until the elementRef is alive, we can listen his host events
   * and therefore focus internal changes as clicking outside and etc.
   *
   * @memberof Select
   */
  public override componentDidMount(): void {
    setTimeout(
      () =>
        this._subscription?.add(
          fromEvent<MouseEvent>(document, 'click')
            .pipe(
              filter(
                ({ target }: MouseEvent): boolean =>
                  !this._isClickOutsideChecked(target as HTMLElement)
              )
            )
            .subscribe(this._handleClickOutsideEvent)
        ),
      0
    );
  }

  /**
   * Unsubscribe from the select element ref handler.
   * We will no longer listen values for any clicked outside events.
   *
   * @returns
   */
  public override componentWillUnmount(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
      this._subscription = null;
    }
  }

  /**
   * Determines whether click outside checked
   *
   * @param target
   * @returns true if click outside checked
   */
  protected abstract _isClickOutsideChecked(target: HTMLElement): boolean;

  /**
   * Handle Click Outside Events.
   *
   * @param target of mouse event.
   */
  protected abstract _handleClickOutsideEvent(target: MouseEvent): void;

  /**
   * Gets Host Element.
   *
   * @returns host element.
   */
  protected abstract _getHostElement(): HTMLDivElement;
}

/**
 * Select Elements Options.
 *
 * @export
 * @class Select
 * @extends React.PureComponent<SelectProps>
 */
export class Select extends SelectClickOutside {
  private _selectElementRef!: React.RefObject<HTMLDivElement>;

  private readonly _stateChanges: Subject<void> = new Subject<void>();

  public readonly stateChanges: Observable<void> =
    this._stateChanges.asObservable();

  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  public static displayName: string = `select-${++nextUniqueId}`;

  /**
   * Default props factory.
   *
   * @static
   * @type Readonly<inputProps>
   * @memberof Input
   */
  public static defaultProps: Readonly<SelectProps> = SELECT_PROPS_FACTORY();

  public constructor(props: Readonly<SelectProps>) {
    super(props);

    this._selectElementRef = React.createRef<HTMLDivElement>();

    this.state = {} as SelectState;

    this._handleNativeClickEvent = this._handleNativeClickEvent.bind(this);
    this._handleClickOutsideEvent = this._handleClickOutsideEvent.bind(this);
  }

  /**
   * Get initial state of select.
   *
   * @return SelectState
   * @memberof Select
   */
  public getInitialState(): SelectState {
    return {
      isSelectOpened: false,
      isOptionSelected: false,
    };
  }

  /**
   * Render Select Component.
   *
   * @memberof Select
   */
  public override render(): JSX.Element {
    const { id, placeholder, name, value, disabled }: Readonly<SelectProps> =
      this.props;
    const { isSelectOpened }: SelectState = this.state;
    return (
      <div
        ref={this._selectElementRef}
        id={Select.displayName}
        className="select"
      >
        <Input
          readonly={true}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          onClick={this._handleNativeClickEvent}
          id={id || Select.displayName}
          name={name || Select.displayName}
          ariaHasPopUp={true}
          ariaOwns={name || Select.displayName}
          ariaActivedescendant={id || Select.displayName}
        />
        <div
          className={classnames('select-dropdown select-dropdown-icon', {
            active: isSelectOpened,
          })}
        >
          <SelectDropDownIcon />
        </div>
        <span
          className={classnames('select-dropdown-separator', {
            active: isSelectOpened,
          })}
        ></span>
        <div className="select-dropdown-options">
          {isSelectOpened ? (
            <ul className="options"> {super._renderChildrenRef()} </ul>
          ) : null}
        </div>
      </div>
    );
  }

  /**
   * Determines whether click outside checked is.
   *
   * @param target
   * @returns true if click outside checked
   */
  protected _isClickOutsideChecked(target: HTMLElement): boolean {
    return (
      this._getHostElement() === target ||
      this._getHostElement().contains(target)
    );
  }

  /**
   * Handle Click Outside Events.
   *
   * @param target of mouse event.
   */
  protected _handleClickOutsideEvent(target: MouseEvent): void {
    this.setState((prevState) => ({ ...prevState, isSelectOpened: false }));
  }

  /**
   * Handles Native Click Events.
   *
   * @param target of mouse event.
   */
  protected _handleNativeClickEvent(target: InputClickEvent): void {
    this.setState((prevState) => ({
      ...prevState,
      isSelectOpened: !prevState.isSelectOpened,
    }));
  }

  /**
   * Gets Host Element.
   *
   * @returns host element.
   */
  protected override _getHostElement(): HTMLDivElement {
    return this._selectElementRef.current as HTMLDivElement;
  }
}
