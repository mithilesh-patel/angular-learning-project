import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ifelse',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css'
})
export class IfelseComponent {

  isDiv1Visible: boolean = false;
  isDiv2Visible: boolean = true;

  inputValue1: string = '';
  inputValue2: string = '';

  subject: string = '';

  checkboxIsActive: boolean = false;


  showDiv1(){
    this.isDiv1Visible=true;
  }
  
  hideDiv1(){
    this.isDiv1Visible=false;
    
  }

  toggleDiv2(){
    this.isDiv2Visible=!this.isDiv2Visible;
  }

}