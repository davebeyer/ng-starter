import {
    Component,
    OnInit
} from '@angular/core';


@Component({
    selector    : 'home',
    moduleId    : module.id,
    styleUrls   : [ './home.component.css' ],
    templateUrl : './home.component.html'
})
export class HomeComponent implements OnInit {
    constructor() {
    }

    public ngOnInit() {
        console.log('hello `Home` component');
    }
}
