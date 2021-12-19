import Typist from 'react-typist';

import { useBarcode } from 'react-barcodes';

import { StringUtil } from '@core/utils/string.util';
import { FormInternalState } from '@store/domains/forms.state';

export interface PreviewCardContentProps {
  productCode: FormInternalState | null;
  options?: Record<string, unknown>;
}

/**
 * Preview Card Content.
 *
 * @return an instance of fn() component.
 */
const PreviewCardContent: React.FunctionComponent<PreviewCardContentProps> = ({
  productCode,
}: PreviewCardContentProps): JSX.Element => {
  const { value, defaultValue }: FormInternalState =
    productCode as FormInternalState;

  const { inputRef }: { inputRef: React.RefObject<SVGSVGElement> } = useBarcode(
    {
      value: (value as string) || (defaultValue as string),
      options: {
        flat: true,
        margin: 0,
        displayValue: false,
        textAlign: 'left',
        textPosition: 'bottom',
      },
    }
  );

  return (
    <div role="textbox" id="preview-card-content">
      <div className="max-h-fit px-4 overflow-x-hidden break-words text-ellipsis">
        <span className="text-dark text-md font-semibold pointer-events-none select-none">
          {value || defaultValue}
        </span>
        <div className="overflow-x-hidden max-w-full">
          <svg
            ref={inputRef}
            className="mt-2 max-h-16"
            id="preview-card-barcode"
            preserveAspectRatio={'none'}
          />
        </div>
      </div>
    </div>
  );
};

PreviewCardContent.defaultProps = {
  productCode: {
    value: StringUtil.EMPTY,
    defaultValue: StringUtil.EMPTY,
  } as FormInternalState,
};

export { PreviewCardContent };
