import { injectable as Injectable } from 'inversify';
import { LoggerService } from './logger-service';

/**
 * Implementation for logger service.
 *
 * @export LoggerServiceImpl as an implementation of LoggerService.
 * @class LoggerServiceImpl of LoggerService.
 * @implements LoggerService
 */
@Injectable()
export class LoggerServiceImpl implements LoggerService {
  public info(source: unknown): void {
    console.log(source);
  }

  public error(source: Error): void {
    console.log(source);
  }

  public debug(source: string): void {
    console.log(source);
  }

  public warn(source: string): void {
    console.log(source);
  }
}
