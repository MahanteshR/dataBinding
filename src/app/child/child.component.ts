import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  studentId = 100282;
  studentName = 'ALEXA';

  status = 'Student does not exist';

  getStudentName(): string {
    return this.studentName;
  }
}

