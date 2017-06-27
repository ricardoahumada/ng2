"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Address_1 = require("./Address");
var Customer = (function () {
    function Customer() {
        this.age = 0;
        this._name = "";
        this.address = new Address_1.Address();
    }
    Object.defineProperty(Customer.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (aname) {
            if (aname.length == 0) {
                throw "Customer name short";
            }
            this._name = aname;
        },
        enumerable: true,
        configurable: true
    });
    Customer.prototype.Add = function () {
    };
    Customer.prototype.Validate = function () {
        console.log('Validate');
        return true;
    };
    return Customer;
}());
exports.Customer = Customer;
var SomeOtherCustomer = (function (_super) {
    __extends(SomeOtherCustomer, _super);
    function SomeOtherCustomer() {
        return _super.apply(this, arguments) || this;
    }
    SomeOtherCustomer.prototype.Validate = function () {
        this.age = 10;
        console.log('This is a new customer:', this.age);
        return true;
    };
    return SomeOtherCustomer;
}(Customer));
