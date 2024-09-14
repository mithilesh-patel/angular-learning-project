import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [],
  templateUrl: './employee-list.component.html',
  styles: ['.primary{color:red}']
})
export class EmployeeListComponent {
  
  constructor (private router: Router  ){

  }
  
  goToAttributeComponent(){
    this.router.navigateByUrl("attribute-dir")
  }
}