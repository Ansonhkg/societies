import { Component } from '@angular/core';

const SOCIETY: Society[] = [
    {
        id: 8160,
        name: "Advertising",
        img: "",
        description: '123',
        days: {
            0:null,
            1:{
                time: "18:00-20:00",
                location: "George Fox"
            },
            2:null,
            3:{
                time: "16:00-18:00",
                location: "George Fox"
            },
            4:null,
            5:{
                time: "20:00-22:00",
                location: "County Main"
            },
            6:null
        }
    },
    {
        id: 8161,
        name: "African Caribbea",
        img: "",
        description: '123',
        days: {
            0: null,
            1: {
                time: "14:00-16:00",
                location: "George Fox"
            },
            2: {
                time: "16:00-18:00",
                location: "George Fox"
            },
            3: {
                time: "18:00-20:00",
                location: "County Main"
            },
            4:null,
            5:null,
            6:null
        }
    },
    {
        id: 8162,
        name: "Aikido",
        img: "",
        description: '123',
        days: {
            0: {
                time: "12:00-14:00",
                location: "George Fox"
            },
            1:null,
            2:null,
            3:null,
            4: {
                time: "20:00-22:00",
                location: "George Fox"
            },
            5: {
                time: "16:00-18:00",
                location: "County Main"
            },
            6:null
        }
    }

];

export class Society{
    id         : number;
    name       : string;
    img        : string;
    description: string;
    days : {
        0:{time: string;location: string;}
        1:{time: string;location: string;}
        2:{time: string;location: string;}
        3:{time: string;location: string;}
        4:{time: string;location: string;}
        5:{time: string;location: string;}
        6:{time: string;location: string;}
    }
}

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <ul class="societies">
            <li *ngFor="let society of societies;">
                {{society.name}}
                <div *ngFor="let i of [0,1,2,3,4,5,6]">
                    <div *ngIf="society.days[i] != null">{{i}}: {{society.days[i].time}} {{society.days[i].location}}</div>
                </div>
            </li>
        </ul>
    `
})

export class AppComponent{

    title = 'Societies Timetable';
    societies = SOCIETY;

}