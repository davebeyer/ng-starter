import { EWComponent }            from './ew.component';
import { ElementComponent }       from './element.component';
import { InvalidEWPathComponent } from './invalidewpath.component';
import { RegExPathMatcher }       from '../utils/regex-path-matcher';

export const routes = [
    { path: '', children: [
        { path      : '',      
          component : InvalidEWPathComponent },

        { path      : ':ewId', 
          component : EWComponent },

        { matcher   : RegExPathMatcher([ { param : 'ewId', regex : /^[0-9]+$/        },
                                         { param : 'type', regex : /^[a-zA-Z]{2}$/   } ]),
          component : EWComponent },

        { matcher   : RegExPathMatcher([ { param : 'ewId',   regex : /^[0-9]+$/      },
                                         { param : 'elemId', regex : /^[0-9]+$/      },
                                         { param : 'type',   regex : /^[a-zA-Z]{2}$/ } ]),
          component : ElementComponent },

        { path: '**',    component: InvalidEWPathComponent },
    ]},
];
