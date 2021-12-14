import { Subject, Observable } from 'rxjs';

/**
 * Countries Code Factory.
 *
 * @export CountriesAdapter of generic type resolver.
 * @class CountriesCodeFactory
 */
export abstract class CountriesAdapter<T, L = unknown> {
  /**
   * Default locale provider.
   *
   * @protected of CountriesAdapter.
   * @memberof CountriesAdapter
   */
  protected _locale!: L;

  /**
   * Local changes handler.
   *
   * @protected
   * @type Subject<void>
   * @memberof CountriesAdapter
   */
  protected readonly _localeChanges: Subject<void> = new Subject<void>();

  /**
   * Locale changes listener.
   *
   * @type Observable<void>
   * @memberof CountriesAdapter
   */
  public readonly localeChanges: Observable<void> =
    this._localeChanges.asObservable();

  /**
   * Get all countries from adapter.
   *
   * @abstract methods.
   * @return T an instance of generic resolver.
   * @memberof CountriesAdapter of abstract class.
   */
  public abstract getAllNames(): Record<string, string>;

  /**
   * Set locale for countries code list.
   *
   * @param  {L} locale of locale provider.
   * @return {void}
   * @memberof CountriesAdapter
   */
  protected setLocale(locale: L): void {
    this._locale = locale;
    this._localeChanges.next();
  }
}
