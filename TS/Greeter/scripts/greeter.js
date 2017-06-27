var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this._fullName = firstName + " " + middleInitial + " " + lastName;
    }
    Object.defineProperty(Student.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        enumerable: true,
        configurable: true
    });
    Student.prototype.getName = function () {
        return this._fullName + " " + this.surname;
    };
    Student.prototype.getAlgo = function () {
    };
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
function hola(val) {
    return "Un string:" + val;
}
var user = new Student("Jane", "M.", "User");
var algo = user.getAlgo();
document.body.innerHTML = greeter(user) + "<br>" + hola(user.getName());
