var canva, contestantCount, database, quiz, question, contestant;
var gameState = 0

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.update();
  quiz.gameState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  
}
