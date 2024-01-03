const person = {
    'name':'John',
    'age':14,
    greet: function() { console.log(`The name is ${this.name}`); }
}
person.greet()