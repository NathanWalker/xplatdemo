import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@xplatdemo/xplat/web/features';

@Component({
  selector: 'xplatdemo-root',
  templateUrl: './app.component.html',
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
