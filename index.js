//* DESTRUCTURING

const alfabet = ["A", "B", "C", "D", "E", "F"];
const numbers = ["1", "2", "3", "4", "5", "6"];

//const a = alfabet[0]
//const b = alfabet[1]

const [a, b, ...rest] = alfabet
const newArray = [...alfabet, ...numbers]
console.log(newArray)
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
    age:32,
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
function printUser({name}){
    console.log(`Name is: ${name}. Age is: ${age} `)
}

printUser(Person);

/**  ############################## **/
