console.log("Working")

let myBtn = document.getElementById("myBtn")
let content = document.getElementById("content")

//fetch is asynchronus, runs in background
//fetch is basically used to get data either from a local file or more commonly APIs
//fetch returns a promise which also returns a promise
function getDataLocal(){
    url = "file.txt"     //let's start with a local file
    fetch(url).then((response)=>{
        //response is what was fetched
        return response.text()
        // if we do 'return response' then it returns the full promise object with headers and status code and type and url all that, it is the text of that we are intrested in so we do return response.text()
    }).then((data)=>{    //data = response.text() which was returned previously
        console.log(data)
    })
}

//getDataLocal() prints the content of file.txt

//this was a get request
//let's try out an API namely https://api.github.com/users
// this API returns a list of github users in JSON format, go to the link to see
function getData(){
    url = "https://api.github.com/users"     
    fetch(url).then((response)=>{
        //return response.text()   this will print out the list as text
        return response.json()  //will return is json format which is an array of objects
    }).then((data)=>{    
        console.log(data)
    })
}


getData()


