
//here we declare a function
const getTodos = () => {
    
    // creating a new instance
    const request = XMLHttpRequest();

    
    //setting up an event listener to the request variable.
    request.addEventListener("readystatechange", ()=>{
       
       //we create our conditional to make sure everything is true
        if (request.readyState === 4 && request.status === 200){
            
            // if its true then we console loging the request and a response
            console.log(request.responseText)

            // if the first conditional dont work then we test if this is true
        }else if (request.readyState === 4) {
            
            // then we console.log this string.
            console.log("could not fetch the data");
        }
    });

    // here we set up the request by calling open method and send method
    request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
    request.send();
}

//here we will fetch the data
getTodos();
getTodos();
