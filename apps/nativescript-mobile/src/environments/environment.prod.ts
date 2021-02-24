import { environmentBase } from './environment.base';
import { IEnvironment } from '@xplatdemo/xplat/core';
import { environmentProd } from '@xplatdemo/xplat/environments';

export const environment: IEnvironment = environmentBase(environmentProd, {
  // app level customizations here...
});