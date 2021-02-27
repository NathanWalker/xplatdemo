import { NgModule } from '@angular/core';
import { XplatdemoElectronCoreModule } from '@xplatdemo/xplat/electron/core';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [AppModule, XplatdemoElectronCoreModule],
  bootstrap: [AppComponent],
})
export class AppElectronModule {}
