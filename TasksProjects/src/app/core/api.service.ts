import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ApiService{
	sayHello(){
		return Observable.of('hello world');
	}
}