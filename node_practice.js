//// Import the mmain method
const fs = require('fs');
const path = require('path');
const randomWords = require('random-words');
require('dotenv').config();
const oneLinerJoke = require('one-liner-joke');

// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Script Task 1~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// // use to grasp the parameters
// const parameters = process.argv.slice(2);
// createFile(parameters[0],parameters[1]);

// // create and write to file (and reed from it)
// function createFile(numOfFile,amountOfWords){
//     for(let i = 0; i<numOfFile; i++){
//         amountOfWords = amountOfWords * 1;
//         console.log(amountOfWords);
//         fs.writeFile(
//             // add new file + new text
//             path.join(__dirname,'created_files',`${i}.txt`,),randomWords({ exactly: amountOfWords, join: ' ' }),
//             err => {
//                 // check if ther as an error
//                 if (err) throw err;
//                 // else reed the file and check that is not empty
//                 fs.readFile(path.join(__dirname, '/created_files/', `${i}.txt`),'utf8',
//                 (err,date) =>{
//                     // if the file empty
//                     if(!date) throw err;
//                     // else print successfull message
//                     console.log('The file was created successfully');
//                 });
//             }) 
//             // print the name and amount words in file
//           console.log(`name of the file: ${i}.text, amount words in the file: ${amountOfWords}`);
        
//           amountOfWords*= 2;  
//     }
// };
// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Script Task 2~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // Managing Jokes function
// function managingJokes(){
//     // get the amount of jokes
//     let jokeAmount = process.env.JOKE_AMOUNT;

//     // check if the parameters are correct
//     if(!jokeAmount){
//       jokeAmount = 50;
//     }

//     // Get the joke ass a string
//     let subject = process.env.JOKE_SUBJECT;
//     subject = JSON.stringify(oneLinerJoke.getRandomJokeWithTag(subject));

//     if(jokeAmount < 50){
//        console.log('Error! the joke amount not correct');

//     }
//     else if((!subject) || (subject.length === 21)){
//        console.log('Error! the joke subject not correct');
//       }
//       else{
//           // loop on all the jokes
//           for(let i = 0; i<jokeAmount; i++){
//            let joke = JSON.stringify(oneLinerJoke.getRandomJokeWithTag(process.env.JOKE_SUBJECT));
//            // read the joke file to check for exsist joke
//            fs.readFile('jokes.txt','utf8',
//            (err,date) =>{
//                // if the joke exsist
//                if(date.includes(joke)) throw err;
//                // else you can add the joke to file
//                fs.appendFile('jokes.txt',
//                `${joke} \n`,
//              (err) =>{
//                if(err) throw err;
//                console.log('The joke was successfully written to the file');  
//              })
//            })
//           }
//       }         
//    }
//    managingJokes();

//// ~~~~~~~~~~~~~~~~~~~~~~~~~~~Script Task 3~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var oldPath = path.join(__dirname,'/files_to_move/file.txt');
var newPath = path.join(__dirname,'/moved_files/file.txt');

fs.rename(oldPath, newPath, function (err) {
  if (err) throw err
  console.log('Successfully renamed - AKA moved!')
})
