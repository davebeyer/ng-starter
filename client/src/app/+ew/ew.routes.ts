import { EW }                     from './ew/index';
import { Element }                from './elem/index';

import { InvalidEWPathComponent } from './invalid/index';
import { RegExPathMatcher }       from '../utils/regex-path-matcher';

export const routes = [
    { path: '', children: [
        { path      : '',      
          component : InvalidEWPathComponent },

        { path      : ':ewId', 
          component : EW },

        { matcher   : RegExPathMatcher([ { param : 'ewId', regex : /^[0-9]+$/        },
                                         { param : 'type', regex : /^[a-zA-Z]{2}$/   } ]),
          component : EW },

        { matcher   : RegExPathMatcher([ { param : 'ewId',   regex : /^[0-9]+$/      },
                                         { param : 'elemId', regex : /^[0-9]+$/      },
                                         { param : 'type',   regex : /^[a-zA-Z]{2}$/ } ]),
          component : Element },

        { path: '**',    component: InvalidEWPathComponent },
    ]},
];
