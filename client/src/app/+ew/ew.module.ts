import { CommonModule }           from '@angular/common';
//import { FormsModule }            from '@angular/forms';

import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { RouterModule }           from '@angular/router';

import { routes }                 from './ew.routes';

import { EW }                     from './ew/index';
import { Element }                from './elem/index';

import { ChoiceElement }          from './elem-choice/index';

import { InvalidEWPathComponent } from './invalid/index';

console.log('`EW` bundle loaded asynchronously');

@NgModule({
  declarations: [
      // Components / Directives/ Pipes
      EW,
      Element,
      InvalidEWPathComponent,
      ChoiceElement
  ],
  imports: [
      CommonModule,   // e.g., for ngSwitch, ngIf, ngFor...
      //FormsModule,
      RouterModule.forChild(routes),
  ],
})
export class EWModule {
  public static routes = routes;
}
