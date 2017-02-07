import { EWComponent }            from './ew.component';
import { ElementComponent }       from './element.component';

export const routes = [
  { path: '', children: [
    { path: '',     component: EWComponent },
    { path: 'elem', component: ElementComponent }
  ]},
];
