import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { throwIfAlreadyLoaded } from '@xplatdemo/xplat/utils';
import { XplatdemoCoreModule } from '@xplatdemo/xplat/web/core';

@NgModule({
  imports: [XplatdemoCoreModule, IonicModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
})
export class XplatdemoIonicCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: XplatdemoIonicCoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'XplatdemoIonicCoreModule');
  }
}
