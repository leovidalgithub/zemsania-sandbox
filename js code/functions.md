**JavaScript Function Invocation**
JavaScript functions can be invoked in 4 different ways.
This, is the object that "owns" the current code.
The value of this, when used in a function, is the object that "owns" the function.

**Invoking a JavaScript Function**
```javascript
    function myFunction( a, b ) {
        return this;
    }
    myFunction( 10, 2 ); --> [object Window]
```

The function above does not belong to any object. But in JavaScript there is always a default global object.
In HTML the default global object is the HTML page itself. In a browser the page object is the browser window. The function above automatically becomes a window function.
    
    myFunction() and window.myFunction()

>>This is a common way to invoke a JavaScript function, but not a very good practice. Global variables, methods, or functions can easily create name conflicts and bugs in the global object.
When a function is called without an owner object, the value of this becomes the global object. (object Window)

**Invoking a Function as a Method**
The following example creates an object (myObject), with two properties (firstName and lastName), and a method (fullName):

```javascript
    var myObject = {
        firstName:"John",
        lastName: "Doe",
        fullName: function () {
            return this;
        }
    }
    myObject.fullName(); --> // [object Object]
```

The fullName method is a function. The function belongs to the object myObject.
This, is the object that "owns" the JavaScript code.

>Invoking a function as an object method, causes the value of this to be the object itself.

**Invoking a Function with a Function Constructor**
When use new keyword, it is a constructor invocation. It looks like you create a new function, but you actually create a new object:

```javascript
     // This is a function constructor:
    function myFunction( arg1, arg2 ) {
        this.firstName = arg1;
        this.lastName  = arg2;
    }
    var x = new myFunction( "John", "Doe" );
```

This keyword in the constructor does not have a value. The value of this will be the new object created when the function is invoked.

**Invoking a Function with a Function Method**
In JavaScript, functions are objects.

**call() and apply()** are predefined JavaScript function methods. Both methods can be used to invoke a function, and both methods **must have the owner object as first parameter.**

```javascript
    function myFunction( a, b ) {
        return a * b;
    }
    var myObject = myFunction.call( myObject, 10, 2 );
```

```javascript
    function myFunction( a, b ) {
        return a * b;
    }
    myArray = [ 10, 2 ];
    var myObject = myFunction.apply( myObject, myArray );
```

Both methods take an owner object as the first argument. The only difference is that **call() takes the function arguments separately,** and **apply() takes the function arguments in an array.**

In JavaScript **strict mode,** the first argument becomes the value of this in the invoked function, even if the argument is not an object. In **"non-strict"** mode, if the value of the first argument is null or undefined, it is replaced with the global object. With call() or apply() you can set the value of this, and invoke a function as a new method of an existing object.

