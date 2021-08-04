// Import the mmain method
const fs = require('fs');
const path = require('path');
const randomWords = require('random-words');


const parameters = process.argv.slice(2);
createFile(parameters[0],parameters[1]);


// function to create rndom chars from a number
// function getRandomString(number) {
//     const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//     let result = '';
 
//     for (let i = 0; i < number; i++ ) {
//         result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
//     }
//     return result;
// }

// create and write to file (and reed from it)
function createFile(numOfFile,amountOfWords){
    for(let i = 0; i<numOfFile; i++){
        fs.writeFile(
            // add new file + new text
            path.join(__dirname,'created_files',`${i}.txt`,),randomWords({ exactly: amountOfWords, join: ' ' }),
            err => {
                // check if ther as an error
                if (err) throw err;
                // else reed the file and check that is not empty
                fs.readFile(path.join(__dirname, '/created_files/', `${i}.txt`),'utf8',
                (err,date) =>{
                    // if the file empty
                    if(!date) throw err;
                    // else print successfull message
                    console.log('The file was created successfully');
                });
            }) 
            // print the name and amount words in file
          console.log(`name of the file: ${i}.text, amount words in the file: ${amountOfWords}`);
          amountOfWords*= 2;  
    }
};

createFile();






