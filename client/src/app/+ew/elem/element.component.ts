import { Component,
         Inject,
         OnInit }                 from '@angular/core';
import { ActivatedRoute }         from '@angular/router';

import { ChoiceElement }          from '../elem-choice/index';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Element` component loaded asynchronously');

@Component({
    selector : 'ew',
    moduleId : module.id,
    template: `
      <h1>Hello from Element</h1>

      <div [ngSwitch]="ewInfo.type">
        <elem-choice *ngSwitchCase="'ch'" [ewInfo]="ewInfo"></elem-choice>

        <span *ngSwitchDefault>
          <b>Unknown element type ({{ewInfo.type}})!</b>
        </span>
      </div>
  `,
})
export class Element implements OnInit {
    private ewInfo : any;

    constructor (
        @Inject(ActivatedRoute) route: ActivatedRoute
    ) {

        let params = route.snapshot.params;

        this.ewInfo = {
            ewId   : parseInt(params['ewId']),
            elemId : parseInt(params['elemId']),
            type   :          params['type']
        };
    }
    
    public ngOnInit() {
        console.log('hello `Element` component');
    }
}
