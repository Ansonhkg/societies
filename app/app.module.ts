import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DayPipe } from './day.pipe';

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [ AppComponent, DayPipe ],
    bootstrap: [ AppComponent ]
})

export class AppModule{}