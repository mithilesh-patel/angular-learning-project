import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponentComponent } from './components/data-binding-component/data-binding-component.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { StructuralDirComponent } from './components/directive/structural-dir/structural-dir.component';
import { AttributeDirectiveComponent } from './components/directive/attribute-directive/attribute-directive.component';
import { SwitchComponent } from './components/controlflow/switch/switch.component';
import { IfelseComponent } from './components/controlflow/ifelse/ifelse.component';
import { ForComponent } from './components/controlflow/for/for.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PipeComponent } from './components/pipe/pipe.component';

export const routes: Routes = [
  //This is a route object 
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'add-emp',
    component: AddEmployeeComponent,
  },
  {
    path: 'data-binding',
    component: DataBindingComponentComponent,
  },
  {
    path: 'employee-list',
    component: EmployeeListComponent,
  },
  {
    path: 'structural-dir',
    component: StructuralDirComponent,
  },
  {
    path: 'attribute-dir',
    component: AttributeDirectiveComponent,
  },
  {
    path: 'for-component',
    component: ForComponent,
  },
  {
    path: 'ifelse-component',
    component: IfelseComponent,
  },
  {
    path: 'switch-component',
    component: SwitchComponent,
  },
  {
    path: 'pipe-component',
    component: PipeComponent,
  },
];
