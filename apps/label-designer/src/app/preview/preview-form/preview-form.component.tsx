import { Fragment, Component } from 'react';
import { Preview } from '@helpers';
import tw from 'twin.macro';
import './preview-form.component.scss';

/* eslint-disable-next-line */
export interface PreviewFormProps {}

/**
 * Preview Form Implementation.
 *
 * @export
 * @class PreviewForm
 * @typedef {PreviewForm}
 * @extends {Component<PreviewFormProps>}
 */
export class PreviewForm extends Component<PreviewFormProps> {
  /**
   * Wrapper for Preview Form.
   *
   * @private static methods.
   * @static Wrapper
   * @type {*} of TwComponent.
   */
  private static Wrapper = tw.div`max-w-full laptop:w-1/2 rounded-md mx-auto px-6 py-4 shadow`;

  /**
   * Grid List for Preview Form.
   *
   * @private static methods.
   * @static GridList
   * @type {*} of TwComponent.
   */
  private static GridList = tw.div`grid grid-cols-12 grid-flow-row-dense gap-6`;

  /**
   * Grid List Item for Preview Form.
   *
   * @private static methods.
   * @static GridListItem
   * @type {*} of TwComponent.
   */
  private static GridListItem = tw.div`flex justify-center items-center justify-items-center`;

  /**
   * Render preview form context.
   *
   * @public render fn();
   * @override render methods.
   * @returns {JSX.Element}
   */
  public override render(): JSX.Element {
    return (
      <Fragment>
        <div className="flex flex-row flex-nowrap">
          <div className="flex-auto justify-center justify-self-center">
            <PreviewForm.Wrapper>
              <PreviewForm.GridList>
                <PreviewForm.GridListItem className="col-span-12 tablet:col-span-6">
                  <div className="">
                    <form>
                      <div className="">
                        <label>
                          Part Type
                          <input />
                        </label>
                      </div>

                      <div className="">
                        <label>
                          Product Code
                          <input />
                        </label>
                      </div>

                      <div className="">
                        <label>
                          Country of origin
                          <input />
                        </label>
                      </div>

                      <div className="">
                        <label>
                          Part description
                          <input />
                        </label>
                      </div>
                    </form>
                  </div>
                </PreviewForm.GridListItem>
                <PreviewForm.GridListItem className="col-span-12 tablet:col-span-6">
                  <div className="">
                    <Preview />
                  </div>
                </PreviewForm.GridListItem>
              </PreviewForm.GridList>
            </PreviewForm.Wrapper>
          </div>
        </div>
        <div className=""></div>
      </Fragment>
    );
  }
}
