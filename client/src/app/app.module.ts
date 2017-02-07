import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { RouterModule,
         PreloadAllModules }      from '@angular/router';

// Unclear why '/index' is needed on these
import { AppComponent }           from './app.component';
import { HomeComponent }          from './home/index';
import { NoContentComponent }     from './no-content/index';

import { AppRoutingModule }       from './app.routes';

@NgModule({
    bootstrap:    [
        AppComponent
    ],
    imports:      [
        BrowserModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        NoContentComponent
    ]
})
export class AppModule { }
