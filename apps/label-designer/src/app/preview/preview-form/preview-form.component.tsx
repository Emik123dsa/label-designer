/* eslint-disable @typescript-eslint/ban-types */
import memoize from 'memoize-one';
import React, { PureComponent, Component, FormEvent } from 'react';
import classnames from 'classnames';
import { Formik } from 'formik';
import { Preview } from '@helpers';
import { ReactiveConnect } from 'reactive-connect';
import { StringUtil } from '@core/utils/string.util';
import { FormInternalState, FormMultiOption } from '@store/domains/forms.state';

import {
  GridList,
  GridTile,
  Input,
  InputSyntheticEvent,
  Select,
  Option,
  OptionSyntheticEvent,
} from '@scribos/design';
import { SimplePreviewForm, SimplePreviewFormImpl } from '@core/models';

import {
  SetFormsPreviewData,
  setFormsPreviewData,
} from '@store/actions/forms.action';

import { PreviewFormWrapper } from './preview-form-wrapper.component';

import { DependencyContainerContext } from '@core/contexts';
import { Container } from 'inversify';

import {
  LoggerService,
  LoggerServiceConstant,
} from '@core/services/logger-service';

import './preview-form.component.scss';

type PreviewFormState = { simplePreviewForm: SimplePreviewForm };

type PreviewFormStateProps = {
  formsPreview?: FormInternalState[];
};

type PreviewFormDispatchProps = {
  setFormsPreviewData?: (payload: InputSyntheticEvent) => SetFormsPreviewData;
};

/* eslint-disable-next-line */
export type PreviewFormProps = PreviewFormStateProps & PreviewFormDispatchProps;

/**
 * Preview Form Implementation.
 *
 * @export
 * @class PreviewForm
 * @typedef {PreviewForm}
 * @extends {Component<PreviewFormProps>}
 */

@ReactiveConnect(null, {
  setFormsPreviewData,
} as PreviewFormDispatchProps)
export class PreviewForm extends Component<PreviewFormProps, PreviewFormState> {
  /**
   * Get Preview Form Default Name.
   * @static
   * @type string
   * @memberof PreviewForm
   */
  public static displayName: string = PreviewForm.name;

  /**
   * Create and resolve context type as DI container.
   *
   * @static context type.
   * @type React.Context<Container>
   * @memberof PreviewForm
   */
  public static contextType: React.Context<Container> =
    DependencyContainerContext;
  /**
   * Preview form element ref of preview form
   */
  private readonly _previewFormElementRef: React.RefObject<HTMLFormElement>;

  /**
   * Creates an instance of PreviewForm.
   *
   * @param  {Readonly<PreviewFormProps>} props
   * @memberof PreviewForm
   */
  public constructor(props: Readonly<PreviewFormProps>) {
    super(props);

    this.state = {
      simplePreviewForm: new SimplePreviewFormImpl(
        StringUtil.EMPTY,
        StringUtil.EMPTY,
        StringUtil.EMPTY,
        0
      ),
    };

    this._previewFormElementRef = React.createRef<HTMLFormElement>();

    this._handleSubmitEvent = this._handleSubmitEvent.bind(this);
    this._handleNativeFormsEvent = this._handleNativeFormsEvent.bind(this);
  }

  /**
   * Handle Native Option Event.
   *
   * @private
   * @param  {OptionSyntheticEvent} event
   * @return {void}
   * @memberof PreviewForm
   */
  private _handleNativeFormsEvent(
    event: OptionSyntheticEvent | InputSyntheticEvent
  ): void {
    this.props.setFormsPreviewData?.(event);
  }

  /**
   * Handle submit events.
   *
   * @private
   * @param  {React.FormEvent<HTMLFormElement>} event
   * @return {void}@memberof PreviewForm
   */
  private _handleSubmitEvent(event: React.FormEvent<HTMLFormElement>): void {
    const loggerService: LoggerService = (
      this.context as Container
    ).get<LoggerService>(LoggerServiceConstant);

    loggerService.debug('Sync Submit Event');
  }

  /**
   * Resolve derived state from props.
   *
   * @static
   * @param  {Readonly<PreviewFormProps>} prevProps
   * @param  {PreviewFormState} prevState
   * @return Readonly<PreviewFormState>
   * @memberof PreviewForm
   */
  public static getDerivedStateFromProps(
    prevProps: Readonly<PreviewFormProps>,
    prevState: PreviewFormState
  ): Readonly<PreviewFormState> {
    const simplePreviewForm: SimplePreviewForm = prevState.simplePreviewForm;

    return { simplePreviewForm };
  }

  /**
   * Force update for state
   * in the case of updated fields.
   *
   * @param  {Readonly<PreviewFormProps>} nextProps
   * @param  {PreviewFormState} nextState
   * @return boolean
   * @memberof PreviewForm
   */
  public shouldComponentUpdate(
    nextProps: Readonly<PreviewFormProps>,
    nextState: PreviewFormState
  ): boolean {
    if (nextProps.formsPreview) {
      return true;
    }

    return false;
  }

  /**
   * Render preview form context.
   *
   * @public render fn();
   * @override render methods.
   * @returns {JSX.Element}
   */
  public override render(): JSX.Element {
    const { formsPreview }: Readonly<PreviewFormStateProps> = this.props;

    // @internal render preview form.
    return (
      <div className="flex flex-row flex-nowrap">
        <div className="flex-shrink justify-center justify-self-center">
          <PreviewFormWrapper>
            <GridList>
              <GridTile className="col-span-12 tablet:col-span-5">
                <div className="block relative min-h-full">
                  <Formik
                    initialValues={
                      this.state.simplePreviewForm as SimplePreviewForm &
                        FormEvent<HTMLFormElement>
                    }
                    onSubmit={this._handleSubmitEvent}
                  >
                    {({ handleSubmit }) => (
                      <form
                        role="contentinfo"
                        id={PreviewForm.displayName}
                        ref={this._previewFormElementRef}
                        name={PreviewForm.displayName}
                        onSubmit={handleSubmit}
                        contentEditable={false}
                      >
                        {formsPreview &&
                          formsPreview.map?.(
                            ({
                              label,
                              code,
                              defaultValue,
                              selectable,
                              options,
                              value,
                            }) => (
                              <div
                                key={code}
                                className={classnames('form-control', {
                                  active:
                                    selectable ||
                                    (!selectable && value && value),
                                })}
                              >
                                <Input.Label id={code}>
                                  {!selectable ? (
                                    <Input
                                      id={code}
                                      name={label}
                                      onInput={this._handleNativeFormsEvent}
                                    />
                                  ) : (
                                    <Select
                                      id={code}
                                      name={label}
                                      value={
                                        (value as unknown as FormMultiOption)
                                          ?.label ||
                                        (defaultValue as FormMultiOption).label
                                      }
                                      placeholder={
                                        (value as unknown as FormMultiOption)
                                          ?.label ||
                                        (defaultValue as FormMultiOption).label
                                      }
                                    >
                                      {options &&
                                        options?.map(
                                          (
                                            option: FormMultiOption,
                                            index: number
                                          ) => (
                                            <Option
                                              key={index}
                                              code={code}
                                              value={option}
                                              label={label}
                                              onClick={
                                                this._handleNativeFormsEvent
                                              }
                                            >
                                              {option.label}
                                            </Option>
                                          )
                                        )}
                                    </Select>
                                  )}
                                </Input.Label>
                                <div className="form-control-label">
                                  {label}
                                </div>
                              </div>
                            )
                          )}
                      </form>
                    )}
                  </Formik>
                </div>
              </GridTile>
              <GridTile className="col-span-12 tablet:col-span-7">
                <div className="block relative min-h-full rounded-sm border-hawkes-blue border">
                  <Preview />
                </div>
              </GridTile>
            </GridList>
          </PreviewFormWrapper>
        </div>
      </div>
    );
  }
}
