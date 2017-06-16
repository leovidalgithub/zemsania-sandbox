"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
function sayHello(name) {
    return "Hello, " + name;
}
exports.sayHello = sayHello;
var Person = (function () {
    function Person(_name) {
        this.name = _name;
    }
    Person.prototype.dance = function () {
        console.log(this.name + " is dancing!");
    };
    return Person;
}());
var GreatPerson = (function (_super) {
    __extends(GreatPerson, _super);
    function GreatPerson(_name, _age) {
        var _this = _super.call(this, _name) || this;
        _this.age = _age;
        return _this;
    }
    return GreatPerson;
}(Person));
var Peter = new GreatPerson('Peter', 44);
Peter.dance();
var Varios;
(function (Varios) {
    Varios[Varios["Up"] = 1] = "Up";
    Varios[Varios["Down"] = 2] = "Down";
    Varios[Varios["Left"] = 3] = "Left";
    Varios[Varios["Right"] = 4] = "Right";
})(Varios || (Varios = {}));
console.log(Varios.Up);
