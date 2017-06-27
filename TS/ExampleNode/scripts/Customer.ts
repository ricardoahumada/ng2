import {Address} from "./Address";

interface IDal{
	Add();
}

export class Customer implements IDal {
	protected age:number=0;

	private _name:string="";
	public address:Address = new Address();

	public set name(aname:string){
		if(aname.length==0){
			throw "Customer name short";
			
		}
		this._name=aname;	
	}

	public get name():string{
		return this._name;
	}

	Add(){

	}

	Validate():boolean{
		console.log('Validate');
		return true;
	}
}

class SomeOtherCustomer extends Customer {
	
	Validate():boolean{
		this.age=10;
		console.log('This is a new customer:',this.age);
		return true;
	}
}