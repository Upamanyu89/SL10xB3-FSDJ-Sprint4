import { Directive } from '@angular/core';
@Directive({
	selector:'[customDirective]'
})

export class CustomDirective{
	
	constructor(){
		console.log("Directive loaded");
	}
	
}
