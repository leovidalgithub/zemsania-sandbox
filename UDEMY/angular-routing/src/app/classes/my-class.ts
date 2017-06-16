interface Icar {
    brand:string;
    color:string;
    price:number
}
export class MyClass implements Icar {
    static variable:string = 'statics variable';
    public brand:string;
    public color:string;
    public price:number;
    constructor(){}
    getBrand() {
        return this.brand;
    }
}

export function thisFunction( ) {
    let system:string = 'AP3';
    return system;
}

export function giveMeRandom( condition ) {
    return ( condition >= Math.random());
}
