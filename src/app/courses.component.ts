import { Component } from '@angular/core';

@Component({
    selector:'Courses',
    template:`<h2>{{getTitle()}}</h2>

                <ul>
                    <li *ngFor="let course of courses">
                    {{ course }}
                    </li>
                </ul>
            `
})
export class CoursesComponent{
    title="List of stuff";

    getTitle()
    {
        return this.title;
    }

    courses=["course1","course2","course3"];
}