import React, { Component, useMemo } from 'react';
import { FormInternalState } from '@store/domains/forms.state';
import { PreviewCardContent } from './content/preview-card-content.component';
import { PreviewCardFooter } from './footer/previw-card-footer.component';
import { PreviewCardHeader } from './header/preview-card-header.component';
import { PreviewCardStripe } from './preview-card-stripe.component';

import { FormsUtil } from '@core/utils/forms.util';

import './preview-card.component.scss';
/* eslint-disable-next-line */
export interface PreviewCardProps {
  formsPreview?: FormInternalState[];
}

/**
 * Preview card component.
 *
 * @returns an instance of card component.
 */
const PreviewCard: React.FunctionComponent<PreviewCardProps> = ({
  formsPreview,
}): JSX.Element => {
  const getFormsPreviewFieldByCode = (code: string) =>
    useMemo(
      () =>
        new FormsUtil(
          formsPreview as FormInternalState[]
        ).getFormsPreviewFieldByCode(code),
      [code, formsPreview]
    );

  // @internal generate all products preview fields according to the label.
  return (
    <div role="list" className="preview-card">
      <div role="listitem" className="preview-card-header">
        <PreviewCardHeader
          partType={getFormsPreviewFieldByCode('type')}
          partDescription={getFormsPreviewFieldByCode('description')}
        />
      </div>
      <PreviewCardStripe />
      <div role="listitem" className="preview-card-content">
        <PreviewCardContent
          productCode={getFormsPreviewFieldByCode('productCode')}
        />
      </div>
      <PreviewCardStripe />
      <div role="listitem" className="preview-card-footer">
        <div className="mt-2">
          <PreviewCardFooter
            countryCode={getFormsPreviewFieldByCode('countryCode')}
          />
        </div>
      </div>
    </div>
  );
};

PreviewCard.displayName = PreviewCard.name;

export { PreviewCard };
