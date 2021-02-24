import { IEnvironment } from '@xplatdemo/xplat/core';
import { deepMerge } from '@xplatdemo/xplat/utils';
import { environmentBase } from './environment.base';

export const environmentDev = deepMerge(environmentBase, <IEnvironment>{
  // customizations here...
});
