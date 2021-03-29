import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list.component';
import { CustomDirective } from './custom.directive';
import {EmployeeService} from './employee.service'
@NgModule({
  declarations: [
    AppComponent,
	EmployeeListComponent,
	CustomDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
