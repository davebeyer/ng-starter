import { NgModule }               from '@angular/core';
import { Routes,
         RouterModule }           from '@angular/router';

// import { BrowserModule }          from '@angular/platform-browser';

// Unclear why '/index' is needed on these
import { HomeComponent }          from './home/index';
import { InvalidComponent }       from './invalid/index';

// import { DataResolver }           from './app.resolver';

export const routes: Routes = [
    { path: '',       component:    HomeComponent },
    { path: 'home',   component:    HomeComponent },
    { path: 'ew',     loadChildren: 'app/+ew/index#EWModule' },
    { path: '**',     component:    InvalidComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}