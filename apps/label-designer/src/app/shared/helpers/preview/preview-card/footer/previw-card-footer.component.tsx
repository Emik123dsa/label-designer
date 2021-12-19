import Typist from 'react-typist';
import { FormInternalState, FormMultiOption } from '@store/domains/forms.state';

export interface PreviewCardFooterProps {
  countryCode: FormInternalState | null;
}

export const PreviewCardFooter: React.FunctionComponent<
  PreviewCardFooterProps
> = ({ countryCode }: PreviewCardFooterProps): JSX.Element => {
  return (
    <div className="w-full inline-block">
      <h2 className="text-center font-semibold text-lg">
        {countryCode &&
          ((countryCode?.value as FormMultiOption)?.label ||
            (countryCode?.defaultValue as FormMultiOption)?.label)}
      </h2>
    </div>
  );
};
