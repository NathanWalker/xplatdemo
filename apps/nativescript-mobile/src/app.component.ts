import { Component } from '@angular/core';
import { AppService } from '@xplatdemo/xplat/nativescript/core';
import { AppBaseComponent } from '@xplatdemo/xplat/nativescript/features';

@Component({
  selector: 'xplatdemo-root',
  template: `
    <GridLayout>
      <page-router-outlet></page-router-outlet>
    </GridLayout>
  `
})
export class AppComponent extends AppBaseComponent {
  constructor(appService: AppService) {
    super(appService);
  }
}
