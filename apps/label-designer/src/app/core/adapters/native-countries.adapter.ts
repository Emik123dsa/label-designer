import countries, {
  GetNameOptions,
  LocaleData,
  LocalizedCountryNames,
} from 'i18n-iso-countries';
import format from 'string-format';
import { CountriesAdapter } from './countries.adapter';
import { injectable as Injectable } from 'inversify';
import { FormMultiOption } from '~/app/store/domains/forms.state';

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
export class NativeCountriesAdapter extends CountriesAdapter<
  ContriesData,
  LocaleData
> {
  /**
   *  Static countries list provider.
   *
   * @private variable of countries list.
   * @type ContriesData
   * @memberof NativeCountriesAdapter
   */
  private readonly _countries: ContriesData = countries;

  /**
   * Countries locale provider.
   *
   * @private countries locale.
   * @static provider for NativeCountriesAdapter.
   * @memberof NativeCountriesAdapter of class.
   */
  private static readonly COUNTRIES_LOCALE = 'en';

  /**
   * Creates an instance of
   * NativeCountriesAdapter.
   *
   * @memberof NativeCountriesAdapter
   */
  public constructor() {
    super();

    this.setLocale(
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      require(`i18n-iso-countries/langs/${NativeCountriesAdapter.COUNTRIES_LOCALE}.json`)
    );

    this._countries.registerLocale(this._locale);
  }

  /**
   * Get all countries codes.
   *
   * @static
   * @return typeof countries
   * @memberof CountriesCodeAdapter
   */
  public override getAllNames(): LocalizedCountryNames<GetNameOptions> {
    return this._countries.getNames(NativeCountriesAdapter.COUNTRIES_LOCALE, {
      select: 'official',
    });
  }

  /**
   * Convert all names to default multi option DTO.
   *
   * @return ReadonlyArray<FormMultiOption>
   * @memberof NativeCountriesAdapter
   */
  public toArray(): ReadonlyArray<FormMultiOption> {
    return Object.entries(this.getAllNames()).map?.(([key, entry]) => ({
      code: key,
      label: entry,
    }));
  }
}

export const NativeCountriesAdapterConstant = Symbol.for(
  NativeCountriesAdapter.name
);
