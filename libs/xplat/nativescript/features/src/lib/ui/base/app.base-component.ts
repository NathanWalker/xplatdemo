import { Directive } from '@angular/core';

// libs
import { BaseComponent } from '@xplatdemo/xplat/core';
import { AppService } from '@xplatdemo/xplat/nativescript/core';

@Directive()
export abstract class AppBaseComponent extends BaseComponent {
  constructor(protected appService: AppService) {
    super();
  }
}
