import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding-component.component.html',
})
export class DataBindingComponentComponent {

  courseName: String = "Engineering";

  courseNumber: number = 12345;

  myClassName: string = "bg-danger";

  inputType: string = "Checkbox";


  constructor(){

  }


  showAlert(msg: string){
    alert(msg)
  }

  changeLabel(){
    this.courseName = "BSC";
  }
}
