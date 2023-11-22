import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';

export const routes: Routes = [
    {
        component:HomeComponent,
        path:''
    },
    {
        component:EmployeesComponent,
        path:'employees'
    },
];
