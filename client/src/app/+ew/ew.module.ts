//import { CommonModule }           from '@angular/common';
//import { FormsModule }            from '@angular/forms';

import { NgModule }               from '@angular/core';
import { RouterModule }           from '@angular/router';

import { routes }                 from './ew.routes';
import { EWComponent }            from './ew.component';
import { ElementComponent }       from './element.component';

console.log('`EW` bundle loaded asynchronously');

@NgModule({
  declarations: [
      // Components / Directives/ Pipes
      EWComponent,
      ElementComponent
  ],
  imports: [
      // CommonModule,
      //FormsModule,
      RouterModule.forChild(routes),
  ],
})
export class EWModule {
  public static routes = routes;
}
