console.log("hello world");
const name = "Rohan";
const age = 24;
const rating = 4.6;
const isCool = true;
const x = null; // object
const y = undefined;
let z;
console.log(age,name,rating,isCool);

console.log('Name is '+name+' I am '+age+' of Age');

console.log(`Name is ${name} I am ${age} years of age`);

const s="welcome to java"
console.log(s.length);
console.log(s.substring(0,10));
console.log(s.substring(0,10).toUpperCase());
console.log(s.split(''));

const s1 = 'technology, computers, it, code'

console.log(s1.split(','));

const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits = ['apples','pears', 'oranges'];
console.log(fruits);

console.log(fruits[1]);
fruits[3]='mango'
console.log(fruits);
fruits.push('grapes')
console.log(fruits);

const person = {

    firstName: 'Rohan',
    lastName: 'Awasthi',
    age:24,
    hobbies: ['music', 'sports', 'vb'],
    address: {
        street: '2nd Main',
        city: 'Blr',
        state:'KA'
    }

}

console.log(person.address.city);

person.email='awasthirohan19@gmail.com'
console.log(person.email);

const todos = [

    {
        id:1,
        text:'Meditation',
        isCompleted: true
    },
    {
        id:2,
        text:'Scrum meeting',
        isCompleted: true
    },
    {
        id:3,
        text:'Exercise',
        isCompleted: false
    }

];

for (let i = 0; i < 10; i++) {
    console.log(i);
    
}

const todoJSON=JSON.stringify(todos);
console.log(todoJSON);

let i =0;
while(i<10) {
    console.log(`while loop number:${i}`);
    i++;
}

for (let i = 0; i < todos.length; i++) {
console.log(todos[i]);;
    
}

for(let todo of todos){
console.log(todo.text);
}

todos.forEach(function(todo) {
    console.log(todo.text);
})

const todoText = todos.map(function(todo) {
    return todo.text;
})
console.log(todoText);

const x1 = 11;
if(x1 === 10) {
    console.log('x1 is 10');
} else {
    console.log('x1 is not 10');
}

function addNums(num1=1,num2=2){
    return num1+num2;
}

console.log(addNums(5,7));

const addNums1=(num1=1,num2=2) => console.log(num1+num2);

console.log(addNums(10,20));

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);


    this.getBirthYear = function() {
        return this.dob.getMonth();
    }

 


 }

 Person.prototype.getFullName =  function() {
    return `${this.firstName} ${this.lastName}`;
}


 // instantiate object
 const person1 = new Person('Rohan','blr',11-11-1950);
 const person2 = new Person('rk','blr1',27-03-2023);

 console.log(person1);



 class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear = function() {
        return this.dob.getMonth();
    }

    getFullName =  function() {
        return `${this.firstName} ${this.lastName}`;
    }
 }

 const person11 = new Person('Rohan','blr',11-11-1950);
 const person22 = new Person('rk','blr1',27-03-2023);


