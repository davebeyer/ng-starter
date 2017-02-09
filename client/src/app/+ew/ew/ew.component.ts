import {
  Component,
  OnInit,
} from '@angular/core';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`EW` component loaded asynchronously');

@Component({
    selector : 'ew',
    moduleId : module.id,
    template : `
      <h1>Hello from EW</h1>
    `,
})
export class EW implements OnInit {

  public ngOnInit() {
    console.log('hello `EW` component');
  }

}
