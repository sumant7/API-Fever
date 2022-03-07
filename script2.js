console.log("Begins")

/*
function sumant(){  // a simple function returning a string
    return "Sumant";
}
console.log(sumant())   //prints Sumant
*/



//async function returns a promise
async function sumant(){  // a simple function returning a string
    return "Sumant";
}

// console.log("Before")
// let a= sumant()
// console.log(a)  
// console.log("After")
//outputs is: 
// Before
// Promise { <state>: "fulfilled", <value>: "Sumant" }
// After





//we can wait for a promise to get resolved while other work keeps on going
//this basically eleminates need for .then() 
//await is asynchronus
async function great(){
    console.log("inside")
    const response = await fetch('https://api.github.com/users')
    console.log("waiting for fetch promise to resolve")
    const users = await response.json()  //since response.json also returns a promise
    console.log("waiting for users")
    return users;
}
console.log("before")
a= great()  //remember great is a async function and returns a promise
console.log("after")
a.then(data=>console.log(data))
//notice the flow of the output
// before
// inside
// after
// waiting for fetch promise to resolve
// waiting for users
// (30) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]