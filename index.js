var readlineSync=require('readline-sync');

var score=0;


function welcomeUser(){
var userName = readlineSync.question("Hi!! What's your name?😊 \n");
console.log("Welcome "+ userName + "!!");
console.log("😁Let's play a quiz on harry potter !!😎\n");
}

function quiz(ques,ans){
  userAnswer=readlineSync.question(ques)
  if (userAnswer.toLowerCase()==ans.toLowerCase()){
    console.log("You are Right!!🤩");
    score=score+1;
  }
  else{
    console.log("That's an incorrect Answer😐\n")
  }
  console.log("Your current score is "+score);
}
question=[{
  ques:"What is the name of Harry Potter's owl?\n",
  ans:"Hedwig"},
{
  ques:"What was the name of Lord Voldemort's loyal snake?\n",
  ans:"Nagini",
},
{
  ques:"Who killed Dobby by throwing a knife at him?\n",
  ans:"Bellatrix",
},
{
  ques:"What spell would you use to light the tip of your wand?\n",
  ans:"Lumos",
},
{
  ques:"Who was Harry's godfather?\n",
  ans:"Sirius",
},
{
  ques:"At what age one can join in Hogwarts School of Witchcraft?\n",
  ans:"11",
},
{
  ques:"What are people with no magic called ?\n",
  ans:"Muggles",
},
{
  ques:"What position did harry play in quidditch?\n",
  ans:"Seeker",
}]

welcomeUser();

for(i=0;i<question.length;i++){
  curr=question[i]
  quiz(curr.ques,curr.ans)
}
console.log("Your Final score is "+score)
