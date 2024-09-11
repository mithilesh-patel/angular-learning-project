import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css',
})
export class AttributeDirectiveComponent {
  div1bgColor: string = 'bg-primary';
  isbgActive: boolean = true;
  inputValue1:string = '';
  inputValue2:string = '';
  isCheckboxChecked: boolean=false;
  selectBoxValue : string = '';

  studentList: any[]=[
    {id:1, name:"A", marks: 23,gender: "Male", city: "Mumbai", isActive: true},
    {id:2, name:"B", marks: 51,gender: "Male", city: "Pune", isActive: false},
    {id:3, name:"C", marks: 74,gender: "Female", city: "Raipur", isActive: false},
    {id:4, name:"D", marks: 65,gender: "Male", city: "Indore", isActive: true},
    {id:5, name:"E", marks: 67,gender: "Male", city: "Banaras", isActive: false},
    {id:6, name:"F", marks: 12,gender: "Female", city: "Bangalore", isActive: false},
  ]

  changeToDanger() {
    this.div1bgColor = 'bg-danger';
  }

  changeToYellow() {
    this.div1bgColor = 'bg-warning';
  }

  removeYellow(){
    this.div1bgColor="";
  }
  
  toggleGreen(){
    this.isbgActive = !this.isbgActive;
  }
}
