import {
  Component,
  OnInit,
} from '@angular/core';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Element` component loaded asynchronously');

@Component({
  selector: 'ew',
  template: `
    <h1>Hello from Element</h1>
  `,
})
export class ElementComponent implements OnInit {

  public ngOnInit() {
    console.log('hello `Element` component');
  }

}
