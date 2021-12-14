import countries, {
  GetNameOptions,
  LocaleData,
  LocalizedCountryNames,
} from 'i18n-iso-countries';
import format from 'string-format';
import { CountriesAdapter } from './countries-adapter';
import { injectable as Injectable } from 'inversify';

/**
 * ISO 3166-1 contries data.
 */
export type ContriesData = typeof countries;

/**
 * Countries Code Factory.
 * ISO 3166-1 implementation.
 *
 * @export
 * @class CountriesCodeFactory
 */

@Injectable()
export class NaitveCountriesAdapter extends CountriesAdapter<
  ContriesData,
  LocaleData
> {
  /**
   *  Static countries list provider.
   *
   * @private variable of countries list.
   * @type ContriesData
   * @memberof NaitveCountriesAdapter
   */
  private readonly _countries: ContriesData = countries;

  /**
   * Countries locale provider.
   *
   * @private countries locale.
   * @static provider for NaitveCountriesAdapter.
   * @memberof NaitveCountriesAdapter of class.
   */
  private static readonly COUNTRIES_LOCALE = 'en';

  /**
   * Creates an instance of
   * NaitveCountriesAdapter.
   *
   * @memberof NaitveCountriesAdapter
   */
  public constructor() {
    super();

    // @internal locale path for countries json.
    const localePath: string = format(
      'i18n-iso-countries/langs/{0}.{1}',
      NaitveCountriesAdapter.COUNTRIES_LOCALE,
      'json'
    );

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    this.setLocale(require(localePath));
  }

  /**
   * Get all countries codes.
   *
   * @static
   * @return typeof countries
   * @memberof CountriesCodeAdapter
   */
  public override getAllNames(): LocalizedCountryNames<GetNameOptions> {
    return this._countries.getNames(NaitveCountriesAdapter.COUNTRIES_LOCALE, {
      select: 'official',
    });
  }
}
