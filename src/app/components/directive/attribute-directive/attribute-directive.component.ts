import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css',
})
export class AttributeDirectiveComponent {
  div1bgColor: string = 'bg-primary';
  isDiv2Active: string = '';

  changeToDanger() {
    this.div1bgColor = 'bg-danger';
  }

  changeToYellow() {
    this.div1bgColor = 'bg-warning';
  }
  
  toggleGreen(){
    this.div1bgColor = 'bg-success';
  }
}
