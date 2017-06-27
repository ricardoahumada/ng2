class Student {
    private _fullName: string;
    surname: string;
    

    constructor(public firstName, public middleInitial, public lastName) {
        this._fullName = firstName + " " + middleInitial + " " + lastName;
    }

    get fullName():string{
        return this._fullName;
    }

    getName():any{
        return this._fullName + " "+this.surname;
    }

    getAlgo():any{
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

function hola(val:string){
    return "Un string:"+val;
}


let user = new Student("Jane", "M.", "User");
let algo:string=user.getAlgo();

document.body.innerHTML = greeter(user)+"<br>"+hola(user.getName());