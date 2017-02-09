import { Component,
         Input,
         OnInit }                 from '@angular/core';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

@Component({
    selector : 'elem-choice',
    moduleId : module.id,
    template : `
      <div> I am a choice element {{ewInfo.ewId}}/{{ewInfo.elemId}} </div>
    `,
})
export class ChoiceElement implements OnInit {
    @Input() ewInfo : any

    public ngOnInit() {
        console.log('hello `Choice Element` component');
    }

}
