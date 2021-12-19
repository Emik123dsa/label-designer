import React from 'react';

import Typist from 'react-typist';
import { FormInternalState, FormMultiOption } from '@store/domains/forms.state';

export interface PreviewCardHeaderProps {
  partType: FormInternalState | null;
  partDescription: FormInternalState | null;
}

/**
 * Preview Card Header Helper.
 *
 * @param param0
 * @returns
 */
export const PreviewCardHeader: React.FunctionComponent<
  PreviewCardHeaderProps
> = ({ partType, partDescription }: PreviewCardHeaderProps): JSX.Element => {
  // @internal render header preview schemas.
  return (
    <div className="min-w-full inline-block px-4">
      <nav role="navigation">
        <ul
          role="columnheader"
          className="flex flex-row flex-nowrap justify-between items-stretch"
        >
          <li role="definition" className="pt-2 pb-2">
            <div className=" text-sm tablet:text-base font-medium">
              {partType &&
                ((partType?.value as FormMultiOption)?.label ||
                  (partType?.defaultValue as FormMultiOption)?.label)}
            </div>
          </li>
          <li className="relative block">
            <div className="h-full w-[1px] bg-hawkes-blue rounded-full bg-opacity-50 content-none"></div>
          </li>
          <li role="definition" className="pt-2 pb-2">
            <div className="uppercase text-sm  tablet:text-base font-semibold">
              {partDescription &&
                (partDescription?.value || partDescription?.defaultValue)}
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};
