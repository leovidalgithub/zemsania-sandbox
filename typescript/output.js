var Student = (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleName + ' ' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return person.firstName + ' ' + person.lastName;
}
var user = new Student('Leonardo', 'M.', 'Rdgz Vidal');
var ss = document.createElement('B');
var tt = document.createTextNode("From greeter.ts . . . - " + greeter(user));
ss.appendChild(tt);
document.getElementById('content').appendChild(ss);
function sum(a, b) {
    return a + b;
}
var varSum = function (a, b) {
    return a + b;
};
console.log(sum(2, 5));
console.log(varSum(1, 5));
//************************************************
var myAdd = function (x, y) {
    return x + y;
};
console.log(myAdd(3, 3));
