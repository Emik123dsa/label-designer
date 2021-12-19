/**
 * Logger Service Constant Provider.
 */
export const LoggerServiceConstant = Symbol.for('LoggerService');

/**
 * Logger Service.
 *
 * @export LoggerService as service.
 * @interface LoggerService
 */
export interface LoggerService {
  info: (source: unknown) => void;

  error: (source: Error) => void;

  debug: (source: string) => void;

  warn: (source: string) => void;
}
