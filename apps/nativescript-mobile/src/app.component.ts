// import { Component } from '@angular/core';
// import { AppService } from '@xplatdemo/xplat/nativescript/core';
// import { AppBaseComponent } from '@xplatdemo/xplat/nativescript/features';

// @Component({
//   selector: 'xplatdemo-root',
//   template: `
//     <GridLayout rows="*,auto">
//       <page-router-outlet></page-router-outlet>
//       <xplatdemo-footer></xplatdemo-footer>
//     </GridLayout>
//   `
// })
// export class AppComponent extends AppBaseComponent {
//   constructor(appService: AppService) {
//     super(appService);
//   }
// }


import { Component } from '@angular/core';

@Component({
  selector: 'xplatdemo-root',
  template: `

    <StackLayout class="page p-20">
      <Label text="'hello'"></Label>
   </StackLayout>
  `
})
export class AppComponent {}
