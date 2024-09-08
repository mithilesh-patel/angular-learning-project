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
  isbgActive: boolean = true;

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
