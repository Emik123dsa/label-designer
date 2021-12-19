import React from 'react';

export interface BackgroundLayoutProps {
  width: 'full';
  height: 'full';
}

/**
 * Background Layout Component.
 *
 * @export Background as layout component.
 * @class Background as class string.
 */
export class Background {
  /**
   * Layout Static Component.
   *
   * @static
   * @memberof Background
   */
  public static StaticLayout = class extends React.Component<BackgroundLayoutProps> {
    /**
     * Render Background Layout.
     *
     * @returns an instance of static layout.
     */
    public override render(): JSX.Element {
      return (
        <div className="">
          {/*   <picture className="">
            <source
              type="image/webp"
              srcSet="/assets/images/static-background.webp"
            />
            <img
              alt="static-background"
              src="/assets/images/static-background.jpg"
            />
          </picture> */}
        </div>
      );
    }
  };
}
