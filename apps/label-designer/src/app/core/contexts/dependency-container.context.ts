import React from 'react';
import { Container, ContainerModule } from 'inversify';
import {
  NativeCountriesAdapter,
  ContriesData,
  NativeCountriesAdapterConstant,
} from '@core/adapters/native-countries.adapter';
import { CountriesAdapter } from '@core/adapters/countries.adapter';
import { LocaleData } from 'i18n-iso-countries';
import {
  LoggerService,
  LoggerServiceConstant,
} from '@core/services/logger-service';
import { LoggerServiceImpl } from '@core/services/logger-service.impl';
/**
 * Dependency Container Global Factory.
 *
 * @export
 * @class DependencyContainerFactory
 */
export class DependencyContainerFactory {
  /**
   * Instance of depenency container factory.
   *
   * @protected
   * @static
   * @type DependencyContainerFactory
   * @memberof DependencyContainerFactory
   */
  protected static instance: DependencyContainerFactory;

  /**
   * Register global container DI.
   *
   * @protected
   * @memberof DependencyContainerFactory
   */
  protected readonly _container!: Container;
  /**
   * Creates an instance of DependencyContainerFactory.
   *
   * @memberof DependencyContainerFactory
   */
  private constructor() {
    this._container = new Container();
    this.registerDependencies(this._container);
  }

  /**
   * Instance for global factory.
   *
   * @static
   * @return DependencyContainerFactory
   * @memberof DependencyContainerFactory
   */
  public static getInstance(): DependencyContainerFactory {
    if (!DependencyContainerFactory.instance) {
      DependencyContainerFactory.instance = new DependencyContainerFactory();
    }
    return DependencyContainerFactory.instance;
  }

  /**
   * Get instance of container factory.
   *
   * @return
   * @memberof DependencyContainerFactory
   */
  public getContainer(): Readonly<Container> {
    return this._container;
  }

  public registerDependencies(container: Container): void {
    const module: ContainerModule = new ContainerModule((bind) => {
      bind<NativeCountriesAdapter>(NativeCountriesAdapterConstant).to(
        NativeCountriesAdapter
      );

      bind<LoggerService>(LoggerServiceConstant).to(LoggerServiceImpl);
    });
    container.load(module);
  }

  /**
   * Dependency Container Factory.
   *
   * @static method for factory.
   * @return an instance of readonly container.
   * @memberof DependencyContainerFactory
   */
  public static create(): Container {
    const factory = DependencyContainerFactory.getInstance();
    // create container for dependency injections.
    const container: Readonly<Container> = factory.getContainer();

    return container as Container;
  }
}

/**
 * Dependency Container Instance.
 */
export type DependencyContainer = Container;

export const DependencyContainerContext: React.Context<Container> =
  React.createContext<Container>(
    DependencyContainerFactory.create() as Container
  );
