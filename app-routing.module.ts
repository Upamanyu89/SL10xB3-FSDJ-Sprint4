import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeDetailsComponent } from './employee-details.component';
const routes: Routes = [
{path: 'employeeeList',component:EmployeeListComponent},
{path: 'employeedetail/:id',component:EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
