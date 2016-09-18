"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var SOCIETY = [
    {
        id: 8160,
        name: "Advertising",
        img: "",
        description: '123',
        days: {
            0: null,
            1: {
                time: "18:00-20:00",
                location: "George Fox"
            },
            2: null,
            3: {
                time: "16:00-18:00",
                location: "George Fox"
            },
            4: null,
            5: {
                time: "20:00-22:00",
                location: "County Main"
            },
            6: null
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
            4: null,
            5: null,
            6: null
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
            1: null,
            2: null,
            3: null,
            4: {
                time: "20:00-22:00",
                location: "George Fox"
            },
            5: {
                time: "16:00-18:00",
                location: "County Main"
            },
            6: null
        }
    }
];
var Society = (function () {
    function Society() {
    }
    return Society;
}());
exports.Society = Society;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Societies Timetable';
        this.societies = SOCIETY;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <h1>{{title}}</h1>\n        <ul class=\"societies\">\n            <li *ngFor=\"let society of societies;\">\n                {{society.name}}\n                <div *ngFor=\"let i of [0,1,2,3,4,5,6]\">\n                    <div *ngIf=\"society.days[i] != null\">{{i}}: {{society.days[i].time}} {{society.days[i].location}}</div>\n                </div>\n            </li>\n        </ul>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map