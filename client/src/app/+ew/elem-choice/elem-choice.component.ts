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
      <span *ngFor="let choice of elem.choices">
        <input type="radio" name="ew-12-elem-4-{{index}}" value="{{choice.value}}" checked="{{choice.checked}}" > {{choice.label}} <br>
      </span>
      <!--
        <div> I am a choice element {{ewInfo.ewId}}/{{ewInfo.elemId}} </div>
        -->
    `,
})
export class ChoiceElement implements OnInit {
    @Input() ewInfo : any

    elem = {
        choices : [
            {label : 'yes',   value : 1, checked : ''},
            {label : 'no',    value : 2, checked : 'checked'},
            {label : 'maybe', value : 3, checked : ''}
        ],
    };


    public ngOnInit() {
        console.log('hello `Choice Element` component');
    }

}
