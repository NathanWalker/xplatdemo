import { Directive } from '@angular/core';
import { BaseComponent } from '@xplatdemo/xplat/core';

@Directive()
export abstract class FooterBaseComponent extends BaseComponent {
  public text: string = '2021 Angular APAC';

  constructor() {
    super();
  }
}
