import {
  Component,
  OnInit,
} from '@angular/core';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log("In invalid EW path");

@Component({
  selector: 'invalid-ew-path',
  template: `
    <h1>Sorry, this is an Invalid EW Path</h1>
  `,
})
export class InvalidEWPathComponent implements OnInit {

  public ngOnInit() {
      console.log("Initialized invalid EW path");
  }

}
