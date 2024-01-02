import { Injectable } from "@angular/core";
import { Student } from "../myClasses/Student";

@Injectable({
    providedIn: 'root',
})

export class StudentService {
    private student: Student = {fName: 'Chris', lName: 'Laird', campus: 'Trafalgar'};

    getStudent(): Student{
        return this.student;
    }
}