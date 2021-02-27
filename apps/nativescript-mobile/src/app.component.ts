import { Component } from '@angular/core';
import { AppService } from '@xplatdemo/xplat/nativescript/core';
import { AppBaseComponent } from '@xplatdemo/xplat/nativescript/features';

@Component({
  selector: 'xplatdemo-root',
  template: `
    <GridLayout rows="*,auto">
      <page-router-outlet></page-router-outlet>
      <xplatdemo-footer></xplatdemo-footer>
    </GridLayout>
  `
})
export class AppComponent extends AppBaseComponent {
  constructor(appService: AppService) {
    super(appService);
  }
}
