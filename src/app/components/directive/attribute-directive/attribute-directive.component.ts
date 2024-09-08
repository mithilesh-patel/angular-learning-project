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
