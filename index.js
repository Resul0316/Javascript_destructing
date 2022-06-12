//* DESTRUCTURING

const alfabet = ["A", "B", "C", "D", "E", "F"];
const numbers = ["1", "2", "3", "4", "5", "6"];

//const a = alfabet[0]
//const b = alfabet[1]

const [a, b, ...rest] = alfabet
console.log("a", a)
console.log(b)
console.log("rest", rest)
const newArray = [...alfabet, ...numbers]
console.log("newArray: ", newArray)
//* concat ile ayni islemi yaptik
const newArray2 = alfabet.concat(numbers)
console.log(newArray2)


function sumandmuptiply(a,b) {
    return [a+b, a*b]
}
const array = sumandmuptiply(2,4);
console.log("array: (sum and multiply)", array);

//*now I will destructure the sumandmultiply 
const [sum, multiply, division="no division"] = sumandmuptiply(2,4);

console.log("sum: ", sum)
console.log("multiply: ",multiply)
//* If i add a dision in the return line code it will include the disition.
console.log(division)


//* Another Destructuring Example
const Person = {
    name: "Sally",
    age:15,
    adress:{
        city:"Somewhere else",
        state:"Another one of them"
    }
}

//*Destructuring with curly Brace because it is an object
const {name, age, adress:{city}} = Person;
console.log(name)
console.log(age)
console.log(city)

//*if we wanna take only  
function printUser(user){
    console.log(`Name is: ${user.name}. Age is: ${user.age} `)
}

printUser(Person);

//*another way
function printUser({name, age}){
    console.log("name and age: ", `Name is: ${name}. Age is: ${age} `)
}

printUser(Person);

/**  ############################## **/

//* In persontwo I give another age to as I did in person. Here there is 2 age parameter so the last one overrides the first one. 

const persontwo ={
    age:32,
    favoriteFood : "cherry",
}
const personThree ={...Person, ...persontwo}
console.log("personThree", personThree)

/* ############### */
const item = {
    name1:"nokia",
    price:300,
    id:1,
    image:"https:..."
};

const {name1, price} = item;
console.log("name1 and price",  name1, price)

//* Reference and Primitive Values

//* Javascript has two types of values: primitive values and reference values.
//* You can add, change, or delete properties to a reference value, whereas you cannot do it with a primitive value.
//* Copying a primitive value from one variable to another creates a separate value copy. It means that changing the value in one variable does not affect the other.
//* Copying a reference from one variable to another creates a reference so that two variables refer to the same object. This means that changing the object via one variable reflects in another variable.


