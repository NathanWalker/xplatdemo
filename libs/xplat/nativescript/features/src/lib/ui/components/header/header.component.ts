import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

import { HeaderBaseComponent } from '@xplatdemo/xplat/features';

@Component({
  moduleId: module.id,
  selector: 'xplatdemo-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent extends HeaderBaseComponent {
  constructor(private router: RouterExtensions) {
    super();
  }
}
