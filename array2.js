let studname =["Ketaki","Riya","Sakshi"]
console.log(studname.length)

let studname1 =["Ketaki","Riya","Sakshi",'1']
console.log(studname1.toString())


let fruits = ['apple', 'banana', 'orange']
fruitString = fruits.join(',')
console.log(fruitString)

let fruits1 = ["Banana", "Orange", "Apple", "Mango"]
fruits1.pop()
console.log(fruits1)

let fruits2 = ["Banana", "Orange", "Apple", "Mango"]
fruits2.push("Kiwi")
console.log(fruits2)

let fruit = ["Banana", "Orange", "Apple", "Mango"]
fruit.shift()
console.log(fruit)


let fruite = ["Banana", "Orange", "Apple", "Mango"]
fruite.unshift("Lemon")
console.log(fruite)


let fruits3 = ["Apple", "Orange", "Apple", "Mango"]
let position = fruits3.indexOf("Apple")
console.log(position) 


const fruits4= ["Apple", "Orange", "Apple", "Mango"];
let position1 = fruits4.lastIndexOf("Apple") 
console.log(position1)


let stationary = ["pencil", "pen", "scale", "eraser"]
stationary = stationary.slice(2)
console.log(stationary)

let fruits5 =['apple', 'banana', 'cherry', 'mango']
fruits5.splice(1, 0, 'Lemon')
console.log(fruits5)

let fruits6 = ["Banana", "Orange", "Apple","Mango"]
let result = fruits6.includes("Mango")
console.log(result)