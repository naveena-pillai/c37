class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement("h1");
    }
    display(){
        var title = createElement("h1");
        title.html("Car Racing");
        title.position(displayWidth/2+50,0);
        this.input.position(displayWidth/2-50,displayHeight/2-30);
        this.button.position(displayWidth/2-20,displayHeight/2+50);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+=1
            player.index = playerCount;
            //playerCount = playerCount+1
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello "+player.name);
            this.greeting.position(displayWidth/2+50,displayHeight/2-40);
        })
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
}