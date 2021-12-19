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
    public static BackgroundLocation = '/assets/images/static-background';

    /**
     * Render Background Layout.
     *
     * @returns an instance of static layout.
     */
    public override render(): JSX.Element {
      return (
        <div className="fixed inset-0 -z-10 bg-dark opacity-30">
          <picture>
            <source
              type="image/webp"
              srcSet={`${Background.StaticLayout.BackgroundLocation}.webp`}
            />
            <img
              alt="static-background"
              className="min-w-full h-full bg-clip-border bg-no-repeat bg-cover bg-fixed"
              src={`${Background.StaticLayout.BackgroundLocation}.png`}
            />
          </picture>
        </div>
      );
    }
  };
}
