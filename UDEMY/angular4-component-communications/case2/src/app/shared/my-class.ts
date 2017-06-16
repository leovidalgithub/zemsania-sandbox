export class MyClass {
    static getRandomNumber():number {
        return Math.floor((Math.random() * 100) + 1);
    }
    static getRandomChild():number { // between 1 and 3 both inclusive
        return Math.floor((Math.random() * 3) + 1);
    }
}

// *********************** IData INTERFACE *********************
export interface IData {
    msg:number;
}
