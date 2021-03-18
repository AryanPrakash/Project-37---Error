class Question {

    constructor() {
      this.input = createInput("Enter Your Name Here...");
      this.greeting = createElement('h2');
    }
    hide(){
      this.greeting.hide();
      this.input.hide();
    }
  
    display(){
      this.title.html("My Quiz Game");
      this.title.position(350,0);
  
this.question.html("Questions:- What Starts and ends with the letter E, but has only one letter? ");
      this.question.position(150, 80);
  this.option1.html("1: Envelope ");
  this.option1.position(150,100);
  this.option2.html("2: Everyone ");
  this.option2.position(150,120);
  this.input.position(150,230)
      /*this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();*/

        /*contestantCount.name = this.input.value();
        contestantCountCount+=1;
        contestantCount.index = contestantCountCount;
        contestantCount.update();
        contestantCount.updateCount(contestantCountCount);
        this.greeting.html("Hello " + contestantCount.name)
        this.greeting.position(130, 100);*/
      //});
  
    }
  }
  