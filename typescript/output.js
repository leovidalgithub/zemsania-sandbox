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
var tt = document.createTextNode("Hello " + greeter(user));
ss.appendChild(tt);
document.getElementById('content').appendChild(ss);
