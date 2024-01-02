import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/StudentService';
import { Student } from '../myClasses/Student';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  student!: Student;
  constructor(public studentSvc: StudentService){

  }
  ngOnInit(): void {
        this.student = this.studentSvc.getStudent();
  }
}
