const {readFile, writeFile} = require("fs"); //here we import our files

//this line is console loging the beginning of the program
console.log("start");

//read content of file first txt using readFile.
readFile("./content/first.txt", "utf8", (err, result)=>{

// Start our conditional incase we come across an error
    if (err){
    console.log(err);
    return
}
// If no error then it callback to the function of first varible.
const first = result;
//console logging the results of first funcftion
console.log(result);

//read content of file second txt using readFile
readFile("./content/second.txt", "utf8", (err, result)=> {
    
    // Start our conditional incase we come across an error
    if(err) {
        console.log(err);
        return
    }
    
    // If no error then it callback to the function of first varible.
    const second = results;
    //console logging the results of second funcftion
    console.log(results);
    
    // writes a string here is the results calling the 1st & 2nd variable.
    writeFile("./content/result-async.txt", `Here is the result: ${first}, ${second}`, (err, result)=>{
        
        // if we come across error it will display error
        if (err){
            console.log(err) {
                console.log(err);
                return
            }
            // if no error display done with task
            console.log("Done with task")
        }
    })
})
});