import { Component } from '@angular/core';

import { Slot } from './slot';
import { Day }  from './slot';
import { TIMETABLE } from './mock-timetable';

@Component({
    selector: 'my-app',
    templateUrl: 'app/timetable.component.html'
})

export class AppComponent{

    title = 'Societies Timetable';
    timetable = TIMETABLE;
    
}