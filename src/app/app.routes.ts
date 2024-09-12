import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponentComponent } from './components/data-binding-component/data-binding-component.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { StructuralDirComponent } from './components/directive/structural-dir/structural-dir.component';
import { AttributeDirectiveComponent } from './components/directive/attribute-directive/attribute-directive.component';

export const routes: Routes = [
    //This is a route object
  {
    path: 'add-emp',
    component: AddEmployeeComponent,
  },
  {
    path: 'data-binding',
    component: DataBindingComponentComponent,
  },
  {
    path:'employee-list',
    component:EmployeeListComponent
  },
  {
    path:'structural-dir',
    component:StructuralDirComponent
  },
  {
    path:'attribute-dir',
    component:AttributeDirectiveComponent
  }
];
