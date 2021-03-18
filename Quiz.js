class Quiz {

    constructor() {}
      
    hide()
    {
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }
  getState()
  {
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
  }
  update()
  {
    var contestantIndex = "contestants/contestant" + this.index;
    database.ref(contestantIndex).set({
      name:this.name,
      //distance:this.distance
    });
  }
  play(){
    question.hide();
    background("pink");
    textSize(30);
    text("Game Start", 120, 100)
    contestant.getcontestantInfo();
    this.title.html("Results");
      this.title.position(350,0);

    if(allcontestants !== undefined){
      var display_position = 130;
      //for loop, all contestants
      for(var plr in allcontestants){
        if (plr === "contestant" + contestant.index)
          fill("red")
        else
          fill("black");

        display_position+=20;
        textSize(15);
        text(allcontestants[plr].name + ": " + allcontestants[plr].distance, 120,display_position)
      }
    }

    /*if(keyIsDown(UP_ARROW) && contestant.index !== null){
      contestant.distance +=50
      contestant.update();
    }*/
  }
  
  async start()
  {
if (gameState = 0)
{
    contestant = new Contestant(200,200,20,29)
    var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestantCount.getCount();
      }
      question = new Question()
      question.display();
}
  }
}
    
  
  