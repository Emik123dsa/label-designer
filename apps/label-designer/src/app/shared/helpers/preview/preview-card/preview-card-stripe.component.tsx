import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PreviewCardStripeProps {}

const PreviewCardStripe: React.FunctionComponent<
  PreviewCardStripeProps
> = (): JSX.Element => {
  return (
    <div className="inline-block">
      <div className="min-w-full h-[1px] rounded-full bg-opacity-50 bg-hawkes-blue"></div>
    </div>
  );
};

PreviewCardStripe.displayName = PreviewCardStripe.name;

export { PreviewCardStripe };
