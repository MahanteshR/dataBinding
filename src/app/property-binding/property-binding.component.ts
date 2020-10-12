import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent{
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
