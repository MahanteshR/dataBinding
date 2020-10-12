import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {
  addNewStudent = false;
  status = '';
  studentID = '-';
  clicked = false;

  constructor() {
    setTimeout(() => {
      this.addNewStudent = true;
    }, 2000);
  }

  onAddStudent(): void {
    this.status = 'Student with ID-' + this.studentID + ' has been created';
    this.addNewStudent = false;
    this.clicked = true;
  }

  onUpdateStudent(event: Event): void {
    this.studentID = (event.target as HTMLInputElement).value;
  }

}
