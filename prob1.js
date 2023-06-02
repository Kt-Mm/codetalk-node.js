// This is pulling these two files from the file system folder to be used in code
const {readFileSync, writeFileSync} = require("fs");

// This variable allows us to access the file system (FS) for methods and function
const fs = require("fs");

// This will read the content in a first.txt file that is in the content directory
const first = readFileSync("./content/first.txt", "utf8")

// This will read the content in a second.txt file that is in the content directory
const second = readFileSync("./content/second.txt", utf8)

//This will display the content of the first and second txt from our varibales.
console.log(first,second);

//here it creates a new file name, along with some additional text with our first & second value
writeFileSync("./content/result-sync.txt", `Here is the result: ${first}, ${second}`);

//this line is similar to the one above but it specifiy the mode a file should be open in.
writeFileSync("./content/result-sync.txt", `Here is the result: ${first}, ${second}`, {flag: "a"});