export function sayHello(name:string) {
    return `Hello, ${name}`;
}

class Person {
    name:string;
    constructor(_name:string) {
        this.name = _name;
    }
    dance() {
        console.log(`${this.name} is dancing!`);
    }
}
class GreatPerson extends Person {
    age:number;
    constructor(_name:string,_age:number) {
        super(_name);
        this.age = _age;
    }
}
let Peter = new GreatPerson('Peter',44);
Peter.dance();

enum Varios {
    Up =1,
    Down = 2,
    Left,
    Right
}
console.log(Varios.Up);
