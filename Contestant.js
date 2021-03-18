class Contestant {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
      this.button = createButton('Submit');
    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",(data)=>{
        contestantCount = data.val();
      })
    }
    static getcontestantInfo(){
        var contestantInfoRef = database.ref('contestants');
        contestantInfoRef.on("value",(data)=>{
          allcontestants = data.val();
        })
      }
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "contestants/contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
  
    static getcontestantInfo(){
      var contestantInfoRef = database.ref('contestants');
      contestantInfoRef.on("value",(data)=>{
        allcontestants = data.val();
      })
    }
    display()
    {
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            contestant.name = this.input.value();
            contestantCount+=1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
        });
    }
};