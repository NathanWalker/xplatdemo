import { environmentBase } from './environment.base';
import { IEnvironment } from '@xplatdemo/xplat/core';
import { environmentDev } from '@xplatdemo/xplat/environments';

export const environment: IEnvironment = environmentBase(environmentDev, {
  // app level customizations here...
});