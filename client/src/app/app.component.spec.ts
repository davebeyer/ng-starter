import { async, 
         inject,
         ComponentFixture, 
         TestBed }                from '@angular/core/testing';
import { RouterTestingModule }    from '@angular/router/testing';
import { By }                     from '@angular/platform-browser';
import { DebugElement }           from '@angular/core';

import { AppComponent }           from './app.component';
import { HomeComponent }          from './home/index';

describe('AppComponent', function () {
    let de: DebugElement;
    let comp: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ 
                AppComponent,
                HomeComponent
            ],
            imports:      [ 
                RouterTestingModule.withRoutes([
                    { path: '',     component: HomeComponent },
                    { path: 'home', component: HomeComponent }
                ])
            ]
        }).compileComponents().catch(error => console.error(error));
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        comp = fixture.componentInstance;

        comp.router.navigate(['/home']);
        fixture.detectChanges();
        fixture.whenStable().then( () => {
            de = fixture.debugElement.query(By.css('h1'));
        });
    });

    it('should create component', () => expect(comp).toBeDefined() );

    it('should have h1 element', () => expect(de).not.toBe(null) );

    it('should have expected <h1> text', () => {
        fixture.detectChanges();
        const h1 = de.nativeElement;
        expect(h1.innerText).toMatch(/Welcome/i,
                                     '<h1> should include "Welcome"');
    });
});
