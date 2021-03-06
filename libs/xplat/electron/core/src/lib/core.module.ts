import { NgModule, Optional, SkipSelf } from '@angular/core';

import { throwIfAlreadyLoaded } from '@xplatdemo/xplat/utils';
import { ELECTRON_PROVIDERS, ElectronService } from './services';

@NgModule({
  providers: [...ELECTRON_PROVIDERS],
})
export class XplatdemoElectronCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: XplatdemoElectronCoreModule,
    private _electronService: ElectronService
  ) {
    throwIfAlreadyLoaded(parentModule, 'XplatdemoElectronCoreModule');
  }
}
