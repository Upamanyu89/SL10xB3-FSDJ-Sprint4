import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employeeapp';
  employee = {
	  'name':'Upamanyu',
	   'age':30,
	   'salary':'60k'
  }
}
