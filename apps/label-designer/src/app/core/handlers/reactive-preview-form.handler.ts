import { injectable as Injectable } from 'inversify';
import type { EventHandler } from './event.handler';

/**
 * Reactive implementation of {@link EventHandler}
 * as Reactive Form Handler.
 *
 * @export ReactiveFormHandler instance of reactive form handler.
 * @class ReactiveFormHandler public.
 * @implements EventHandler interface.
 *
 * @author Emil Shari <emil.shari87@gmail.com>
 */
@Injectable()
export class ReactivePreviewFormHandler implements EventHandler {
  /**
   * Process form events with handler listener.
   *
   * @param {unknown} source
   * @return {void}
   * @memberof FormHandler
   */
  public process(source: unknown): void {
    console.log(source);
  }
}
