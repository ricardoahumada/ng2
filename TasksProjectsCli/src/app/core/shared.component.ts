import { Component,NgModule } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'shared-comp',
  template: '<span>****Say:{{hello}}***</span>'
})
export class SharedComponent{

	hello:string;
	constructor(private _ApiService:ApiService){
		_ApiService.sayHello().subscribe(
			(val:string)=>{this.hello=val;}
		);
	}
}