import { HttpClient, HttpContext } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  userList:any []=[];

  constructor (private http: HttpClient){
    this.getAllUser();
  }

  getAllUser() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res: any) => {
    console.log(res); // Process the response here

    this.userList= res
    });
  }
}
