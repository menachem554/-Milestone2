//// Import the mmain method
const fs = require('fs');
const path = require('path');
const randomWords = require('random-words');
require('dotenv').config();
const oneLinerJoke = require('one-liner-joke');
// const readline = require("readline");
const rs =require('readline-sync');
const chalk = require('chalk');
const { loadFont } = require('figlet');

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
//     moveFile.length = 0;

//   };
// }
// setInterval(file_mover,1000)

// file_mover();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~SAcript Task 4~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Check if manipulations can be performed
function checkContent(input){
  const contentInFolder = fs.readdirSync(path.join(__dirname,'./task4'));
  if (!contentInFolder.includes(input)) {
    console.log(chalk.red('Error The file or folder you want to manipulate does not exist!'));
  }
  else{
    return true;

  }
}

// option 1
function deleteFileByName(){
 let dFile = rs.question(chalk.cyan('Enter the name of the file:'));

 if (checkContent(dFile) == true) {
  fs.unlinkSync(path.join(__dirname,'./task4/',dFile));
  console.log(chalk.green(`${dFile} was delete Successfully`));
  
}
 
 }

// option 2
function createFileByName(){
  let cFile = rs.question(chalk.cyan('Enter the name of the file:'));

  if (checkContent(cFile) == true){
    console.log(chalk.red('Eroor The file already exists'));
  }
  else{
    fs.writeFile(path.join(__dirname,'./task4/',cFile),'', (err) => {
      if (err) throw  err = 'was not able to create the file';
     
    });
    console.log(chalk.green(`${cFile} was create Successfully`)); 
  }    
}

// option 3
function editFileByName(){
let cFile = rs.question(chalk.cyan('Enter the name of the file:'));
let cFileChange = rs.question(chalk.cyan('Enter your changes:'));

 // check that the file exsits
 if (checkContent(cFile) == true){
   fs.appendFile(`./task4/${cFile}`,`${cFileChange}\n`,(err) => {
     if(err) throw err;
     
   })
   console.log(chalk.green('the change was add to the file'));
 }
}

// option 4
function createFolderByName(){
  let cFolder = rs.question(chalk.cyan('Enter the name of the Folder:'));

  fs.mkdir(`./task4/${cFolder}`, {recursive: true}, (err) => {
    if (err) throw  err = 'was not able to create the folder';
   
  });
  console.log(chalk.green(`${cFolder } was createSuccessfully`)); 
    
}

// option 5
function deleteFolderByName(){
  let dFolder = rs.question(chalk.cyan('Enter the name of the Folder:'));

 // check that the folder exsits
 if (checkContent(dFolder) == true){
  fs.rmdirSync(path.join(__dirname,'./task4/',dFolder));
  console.log(chalk.green('the change was add to the file'));
 }
 }

 // option 6
 function createFileInFolder(){
  let cFile = rs.question(chalk.cyan('Enter the name of the file:'));
  let cFolder = rs.question(chalk.cyan('Enter the name of the folder which the file will be created'));

  if(checkContent(cFolder) == true){
  fs.writeFile(path.join(__dirname,`task4/${cFolder}`,cFile),'', (err) => {
    if (err) throw  err = 'was not able to create the file';
  });  
  console.log(chalk.green(`${cFile} was create Successfully inside ${cFolder}`));  
}
 }

 // option 7
 function deleteFileFromFolder(){
  let dFile = rs.question(chalk.cyan('Enter the name of the file:'));
  let dFolder = rs.question(chalk.cyan('Enter the name of the folder which the file will be delete'));
 
  if (checkContent(dFolder) == true) {
   fs.unlinkSync(path.join(__dirname,`./task4/${dFolder}`,dFile));
   console.log(chalk.green(`${dFile} was delete Successfully`)); 
 }
  }

 // option 8
 function mergeFiles() {
   let info = '';
  let fFile = rs.question(chalk.cyan('Enter the name of First file:'));
  let sfile = rs.question(chalk.cyan('Enter the name of Second file (will merge with the first file)'));

  if(checkContent(fFile) == true && checkContent(sfile) == true) {
    fs.readFile(`./task4/${sfile}`,'utf8', (err,data) => {
      if (err) throw  err = 'was not able to create the file';
      fs.appendFile(`./task4/${fFile}`,`\n ${data}`,(err) => {
        if (err) throw  err = 'was not able to create the file';
        fs.unlinkSync(path.join(__dirname,'./task4/',sfile));
      })
    })
    console.log(chalk.green('the second file was Successfully merge intu first file'));
  }
 }

// the menue
let exit = 1;
while(exit > 0){
console.log(chalk.blue.bold("Welcome to The File system!  Select option from the menue"));
// naae input
let userSelect = rs.question(chalk.blue(` 1: Delete file by name
 2: Create file by name
 3: Edit an existing file
 4: Create Folder by name
 5: Delete Folder by name
 6: Create file inside a Folder
 7: Delete file from Folder
 8: Merge two files
 9: Exit the system\n`));
//greeting user
console.log(chalk.yellow(`your choice : ${userSelect}\n`));
//global varibale to keep account of socre
switch (userSelect){
  case('1') :{
    deleteFileByName();

    break;
  }
  case('2') : {
    createFileByName();

    break;
  }
  case('3') : {
    editFileByName(); 

    break;
  }
  case('4') : {
    createFolderByName();

    break;
  }
  case('5') : {
    deleteFolderByName();

    break;
  }
  case('6') : {
    createFileInFolder();

    break;
  }
  case('7') : {
    deleteFileFromFolder();

    break;
  }
  case('8') : {
    mergeFiles();

    break;
  }
  case('9') : {
    exit = 0;
  
    break;
  }

  default : {
    console.log(chalk.red('Error! you must select number from 1-9'))
  }
}
}












 
