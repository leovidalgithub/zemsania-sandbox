class Student {
    fullName: string;
    constructor( public firstName, public middleName, public lastName ) {
        this.fullName = firstName + ' ' + middleName + ' ' + lastName;
    }
}

interface Person {
    firstName : string;
    lastName  : string;
}

function greeter( person: Person ) {
    return person.firstName + ' ' + person.lastName;
}

var user = new Student( 'Leonardo', 'M.', 'Rdgz Vidal' );

var ss = document.createElement( 'B' );
var tt = document.createTextNode( `Hello ${greeter(user)}` );
ss.appendChild( tt );
document.getElementById( 'content' ).appendChild( ss );
