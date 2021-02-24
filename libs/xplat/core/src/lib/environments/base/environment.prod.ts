import { IEnvironment } from '@xplatdemo/xplat/core';
import { deepMerge } from '@xplatdemo/xplat/utils';
import { environmentBase } from './environment.base';

export const environmentProd = deepMerge(environmentBase, <IEnvironment>{
  production: true,
  // customizations here...
});
