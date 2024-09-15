import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css',
})
export class ForComponent {

  cityList: string[]=['Delhi', 'Mumbai', 'Jaipur', 'Raipur'];
  fruitList: string[]=['Apple', 'Mango', 'Guava', 'Pomegranate', 'Watermelon'];

  studList: any[] = [
    { id: 1, name: 'A', city: 'Mumbai', isActive: true },
    { id: 2, name: 'B', city: 'Pune', isActive: false },
    { id: 3, name: 'C', city: 'Raipur', isActive: false },
    { id: 4, name: 'D', city: 'Indore', isActive: true },
    { id: 5, name: 'E', city: 'Banaras', isActive: false },
    { id: 6, name: 'F', city: 'Bangalore', isActive: false },
  ];
}
