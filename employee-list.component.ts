import { Component,OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { CustomDirective } from './custom.directive';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
  
})
export class EmployeeListComponent implements OnInit {
   employeeList: any[]=[];
   constructor(private employeeService: EmployeeService){
	   
   }
   ngOnInit():void {
	   this.employeeList=this.employeeService.getAllEmployees();
   
  }
}
