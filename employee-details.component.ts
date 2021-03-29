import { Component,OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-details.component.html'
  
})

export class EmployeeDetailsComponent implements OnInit {
   id:string='';
   name: string='';
   company:string='';
   experience: string='Fresher';
   constructor(private route: ActivatedRoute,private employeeService: EmployeeService){
	   
   }
   ngOnInit():void {
	   this.route.params.subscribe(param => {
		   let employee= this.employeeService.getEmployeeById(param['id']);
		   console.log(employee);
		   this.id=employee.id;
		   this.name=employee.name;
		   this.company=employee.company;
		   this.experience=employee.experience;
	   })
   
  }
}
