/**
 * Icon Context Type.
 *
 * @export
 * @interface IconContextType
 */
export interface IconContextType {
  color: string;
  size: string;
  className: string;
}

/**
 * Icon Context Factory.
 * @export
 * @class IconContextFactory
 */
export class IconContextFactory {
  /**
   * Create instance of icon context config.
   *
   * @static
   * @return
   * @memberof IconContextFactory
   */
  public static create(): Readonly<IconContextType> {
    return {
      color: 'var(--colors-dark)',
      size: '1rem',
      className: '#root',
    };
  }
}
