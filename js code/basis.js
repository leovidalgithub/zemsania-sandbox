//Objects basis

var hero = {
  breed: 'Turtle',
  occupation: 'Ninja'
};

//-------------------------------------

var book = {
  name: 'Catch-22',
  published: 1961,	
  author: {
    firstname: 'Joseph',
    lastname: 'Heller'
  }
};

book.author.firstname
book['author']['lastname']
book.author['lastname']
book['author'].lastname

var var1 = 'published';
book[var1] // --> 1961

//------------------------------------
var hero = {
	name : 'Rafaelo',
	sayName: function() {
		return this.name; // return hero.name;
	}
}

function createObject(){
	return {
		name: 'juanma',
		city: 'barcelona'
	}
}
var me = createObject()

//------------------------------------
