// // angular
// import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

// // app
// import { CoreModule } from './core/core.module';
// import { SharedModule } from './features/shared/shared.module';
// import { AppRoutingModule } from './app.routing';
// import { AppComponent } from './app.component';

// @NgModule({
//   imports: [CoreModule, SharedModule, AppRoutingModule],
//   declarations: [AppComponent],
//   bootstrap: [AppComponent],
//   schemas: [NO_ERRORS_SCHEMA]
// })
// export class AppModule {}

import {APP_INITIALIZER, NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";

import { AppComponent } from "./app.component";

export function asyncBoot(): Function {
  return (): Promise<any> => new Promise(resolve => {
    setTimeout(() => {
      console.log('asyncBoot after 4 seconds');
      resolve();
    }, 4000);
  })
}

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: asyncBoot,
      multi: true
    },
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
