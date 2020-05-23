import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentTestComponent } from './component-test/component-test.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { ServiceLearningComponent } from './service-learning/service-learning.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
// import { DepartmentListComponent } from './department-list/department-list.component';
// import { StudentListComponent } from './student-list/student-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentTestComponent,
    InterpolationComponent,
    ServiceLearningComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    routingComponents,
    PageNotFoundComponent,
    DepartmentDetailComponent,
    DepartmentOverviewComponent,
    DepartmentContactComponent
    // DepartmentListComponent,
    // StudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
