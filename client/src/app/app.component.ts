import { Component }              from '@angular/core';
import { Router }                 from '@angular/router';

@Component({
  selector: 'ew-app',
  template: `
    <nav>
      <a [routerLink]=" ['./'] " routerLinkActive="active">
        (default)
      </a> &nbsp;
      <a [routerLink]=" ['./home'] " routerLinkActive="active" id="home-link">
        Home
      </a> &nbsp;
      <a [routerLink]=" ['./ew'] " routerLinkActive="active">
        EW Builder
      </a>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent  {
    // name = 'Angular'; 

    constructor(  
        public router: Router
    ) {
        //
    }

    public ngOnInit() {
    }
}
