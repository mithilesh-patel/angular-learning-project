import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding-component',
  standalone: true,
  imports: [],
  templateUrl: './data-binding-component.component.html',
  styleUrl: './data-binding-component.component.css'
})
export class DataBindingComponentComponent {

  courseName: String = "Engineering";

  courseNumber: number = 12345;

  myClassName: string = "bg-danger";

  inputType: string = "Checkbox";
}
