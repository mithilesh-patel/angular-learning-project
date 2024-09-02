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

  cityArray : string []=['Mumbai', 'Bangaluru', 'Chennai', 'Delhi'];


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
