import { Component } from '@angular/core';

import { FooterBaseComponent } from '@xplatdemo/xplat/features';

@Component({
  selector: 'xplatdemo-footer',
  templateUrl: 'footer.component.html',
})
export class FooterComponent extends FooterBaseComponent {
  constructor() {
    super();
  }
}
