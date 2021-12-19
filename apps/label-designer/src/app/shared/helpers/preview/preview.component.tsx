import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '@store/domains/app.state';
import { PreviewCard } from './preview-card/preview-card.component';

import './preview.component.scss';
import { getFormsPreview } from '@store/selectors/forms.selector';
import { FormInternalState } from '@store/domains/forms.state';

/* eslint-disable-next-line */
export interface PreviewProps {}

/**
 * Preview Component.
 *
 * @returns an instance of component.
 */
export const Preview: React.FunctionComponent<
  PreviewProps
> = (): JSX.Element => {
  const formsPreview: FormInternalState[] | null = useSelector<
    AppState,
    FormInternalState[] | null
  >(getFormsPreview);

  return (
    <div className="preview" role="contentinfo">
      <div className="block max-w-full">
        <PreviewCard formsPreview={formsPreview as FormInternalState[]} />
      </div>
    </div>
  );
};
