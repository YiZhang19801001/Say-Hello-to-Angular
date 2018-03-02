import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector:'courses',
    templateUrl:'courses.component.html',
    styleUrls:[`./app.component.css`]
})
export class CoursesComponent{
    title="Week 3 -- Homework";
    classes;
    courses;
    goaltext:string;
    getTitle(){
        return this.title;
    }

    constructor(service:CoursesService)
    {
        this.courses=service.getCourses();
        this.classes=service.getSytleClasses();
    }

    AddRow(){
        this.courses.push(this.goaltext);
        this.goaltext="";
    }
}