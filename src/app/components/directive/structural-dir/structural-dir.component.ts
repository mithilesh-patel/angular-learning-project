import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-dir',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css',
})
export class StructuralDirComponent {
  isDiv1Visible: boolean = true;
  isDiv2Visible: boolean = true;

  inputValue1: string = '';
  inputValue2: string = '';

  subject: string = '';

  checkboxIsActive: boolean = false;

  cityArray : string []=['Mumbai', 'Bengaluru', 'Chennai', 'Delhi'];

  studList: any[]=[
    {id:1, name:"A", city: "Mumbai", isActive: true},
    {id:2, name:"B", city: "Pune", isActive: false},
    {id:3, name:"C", city: "Raipur", isActive: false},
    {id:4, name:"D", city: "Indore", isActive: true},
    {id:5, name:"E", city: "Banaras", isActive: false},
    {id:6, name:"F", city: "Bangalore", isActive: false},
  ]

  showDiv1() {
    this.isDiv1Visible = true;
  }
  
  hideDiv1() {
    this.isDiv1Visible = false;
  }

  toggleDiv2() {
    this.isDiv2Visible = !this.isDiv2Visible;
  }
  
  
}
