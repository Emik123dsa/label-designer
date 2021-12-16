import { Fragment, Component } from 'react';
import { Preview } from '@helpers';

import './preview-form.component.scss';

/* eslint-disable-next-line */
export interface PreviewFormProps {}

export class PreviewForm extends Component<PreviewFormProps> {
  public override render(): JSX.Element {
    return (
      <Fragment>
        <div className=""></div>

        <div className="flex flex-row flex-nowrap">
          <div className="flex-auto justify-center justify-self-center">
            <div className="max-w-full laptop:w-1/2 mx-auto px-6 py-4 shadow">
              <div className="grid grid-cols-12 grid-flow-row-dense gap-6">
                <div className="col-span-12 tablet:col-span-6 flex justify-center items-center justify-items-center">
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
                </div>
                <div className="col-span-12 tablet:col-span-6 flex justify-center items-center justify-items-center">
                  <div className="">
                    <Preview />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=""></div>
      </Fragment>
    );
  }
}
