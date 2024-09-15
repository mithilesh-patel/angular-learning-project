import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, CurrencyPipe, TitleCasePipe, DatePipe,JsonPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
 fruit1: string="apple";
 fruit2: string="MANGO";
 amount = 123.45;
 company = 'acme corporation';
 purchasedOn = '2024-07-08';
 jsonObj={
  name:'Mithilesh',
  state:'Karnataka',
  city:'Bangalore',
  roll:'301602216028'
 }
}
