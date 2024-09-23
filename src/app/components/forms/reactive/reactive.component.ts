import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule , JsonPipe],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css',
})
export class ReactiveComponent {
  studentForm: FormGroup = new FormGroup({
    fname: new FormControl(),
    lname: new FormControl(),
    username: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    zipcode: new FormControl(),
    invalidCheck: new FormControl(),
  });

  formValue: any;

  onSubmit(){

    this.formValue = this.studentForm.value;
    console.log( this.studentForm.value);
  }
}
