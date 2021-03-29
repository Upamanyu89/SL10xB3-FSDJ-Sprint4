import { Injectable } from '@angular/core';
@Injectable({
	providedIn:'root'
})

export class EmployeeService {
	private employeeList: any[]=[
	{"id":12345,"name":"Upamanyu","company":"TCS","experience":"6 years"},
	{"id":12346,"name":"Debjyoti","company":"CTS","experience":"10 years"},
	{"id":12347,"name":"Sanjoy","company":"IBM","experience":"1 years"},
	{"id":12348,"name":"Mayukh","company":"Accenture","experience":"10 years"}
	]
	constructor(){
		
	}
	getAllEmployees(): any[]
	{
		return this.employeeList;
	}
	getEmployeeById(i: number): any{
		return this.employeeList[i];
	}
	
}
