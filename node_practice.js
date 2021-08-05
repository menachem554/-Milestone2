//// Import the mmain method
const fs = require('fs');
const path = require('path');
const randomWords = require('random-words');
require('dotenv').config();
const oneLinerJoke = require('one-liner-joke');
// const readline = require("readline");
const prompt = require('prompt-sync')();

// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Script Task 1~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// // use to grasp the parameters
// const parameters = process.argv.slice(2);
// createFile(parameters[0],parameters[1]);

// // create and write to file (and reed from it)
// function createFile(numOfFile,amountOfWords){
//     for(let i = 0; i<numOfFile; i++){
//         // amountOfWords = amountOfWords * 1;
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
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Script Task 2~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Managing Jokes function
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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~Script Task 3-~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function file_mover(){
//   // Set the path for the folders
//   const oldPath = 'files_to_move';
//   const newPath = 'moved_files';
//   let moveFile = fs.readdirSync(oldPath);

//   // move from folders
//   for(let i = 0; i <moveFile.length; i++){
//     fs.renameSync(`${oldPath}/${moveFile[i]}`,`${newPath}/${moveFile[i]}`,
//     (err) => {
//     if(err) throw err;
//   })
//       // print to the names to file
//       fs.appendFile('moved_files.txt',`${moveFile[i]} \n`,
//       (err) => {
//         if(err) throw err;
//         //
//     })

//     console.log(`the name of the file/folder is : ${moveFile[i]}`);

//   };
// }

// file_mover();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~SAcript Task 4~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// function deleteFileByName(){

//  console.log(` enter the name of the file:`);
//  name1 = prompt('');

//   fs.unlinkSync(path.join(__dirname,'./task4/',name1));
//   console.log(`${name1} was delete Successfully`); 
// }

// deleteFileByName();

// function createFileByName(){
//  console.log(` enter the name of the file:`);
//  name1 = prompt('');

//   fs.writeFile(path.join(__dirname,'./task4/',name1),'', (err) => {
//     if (err) throw  err = 'was not able to create the file';
//     console.log(`${name1} was createSuccessfully`); 
//   });
    
// }

// createFileByName();

// function editFileByName(){
// const nameOfFiles = fs.readdirSync(path.join(__dirname,'./task4'));

//  console.log(` Enter the name of file that you want to edit:`);
//  name1 = prompt('');

//  console.log('Enter your change:');
//  edit = prompt('');

//  // check that the file exsits
//  if (nameOfFiles.includes(name1)){
//    fs.appendFile(`./task4/${name1}`,edit,(err) => {
//      if(err) throw err;
//      console.log('the change was add to the file');
//    })
//  }
//  else{
//    console.log('Error! the file that you want to change not exsits :(');
//  }
//  }
// editFileByName();

function createFolderByName(){
 console.log(` enter the name of the folder:`);
 nameFolder = prompt('');

  fs.mkdir(pat nameFolder, (err) => {
    if (err) throw  err = 'was not able to create the folder';
    console.log(`${nameFolder} was createSuccessfully`); 
  });
    
}

createFolderByName();











 
