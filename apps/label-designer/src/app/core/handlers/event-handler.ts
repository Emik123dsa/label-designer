/**
 * Event Handler.
 *
 * @export EventHandler instance of handler.
 * @interface EventHandler of handler.
 * @template T of generic source object.
 */
export interface EventHandler<T = unknown> {
  process: (source: T) => void;
}
