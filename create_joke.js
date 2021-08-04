// Import the mmain method
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const oneLinerJoke = require('one-liner-joke');

// Managing Jokes function
function managingJokes(){
     // get the amount of jokes
     let jokeAmount = process.env.JOKE_AMOUNT;
 
     // check if the parameters are correct
     if(!jokeAmount){
       jokeAmount = 50;
     }

     // Get the joke ass a string
     let subject = process.env.JOKE_SUBJECT;
     subject = JSON.stringify(oneLinerJoke.getRandomJokeWithTag(subject));

     if(jokeAmount < 50){
        console.log('Error! the joke amount not correct');

     }
     else if((!subject) || (subject.length === 21)){
        console.log('Error! the joke subject not correct');
       }
       else{
           // loop on all the jokes
           for(let i = 0; i<jokeAmount; i++){
            let joke = JSON.stringify(oneLinerJoke.getRandomJokeWithTag(process.env.JOKE_SUBJECT));
            // read the joke file to check for exsist joke
            fs.readFile(path.join(__dirname, './jokes.txt'),'utf8',(err,date) =>{
                // if the joke exsist
                if(date.includes(joke)) throw err;
                // else you can add the joke to file
                fs.appendFile(path.join(__dirname, './jokes.txt'),
                `${joke} \n`,
              (err) =>{
                if(err) throw err;
                console.log('The joke was successfully written to the file');  
              })
            })
           }
       }         
    }
    managingJokes();

