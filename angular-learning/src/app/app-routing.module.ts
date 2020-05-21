import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentListComponent } from './student-list/student-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  //{path : '', component : DepartmentListComponent},
  //{path : '', redirectTo : '/Departments', pathMatch : 'prefix '}, //check the url by prfix the values
  {path : '', redirectTo : '/Departments', pathMatch : 'full'}, //check full url is present or not
  {path : 'Departments', component : DepartmentListComponent},
  {path : 'Students', component : StudentListComponent},
  {path : 'Employee', component : EmployeeListComponent},
  {path : "**", component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[DepartmentListComponent,
                                 StudentListComponent,
                                 EmployeeListComponent,
                                 PageNotFoundComponent]
