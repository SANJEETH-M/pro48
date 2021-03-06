class Form {

    constructor(){
        this.input = createInput("Name");
        this.button = createButton("play");
        this.title = createElement("h2");
        this.reset = createButton("Reset");
        this.greeting = createElement("h2");
    }

    display(){
    
        this.title.html("bike racing game");
        this.title.position(displayWidth/2 -20, 10)
        this.input.position(displayWidth/2 - 40, displayHeight/2 - 80)
        this.button.position(displayWidth/2 +25, displayHeight/2);
        this.reset.position(displayWidth-110,20);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello"+ player.name);
            this.greeting.position(displayWidth/2 -70, displayHeight/4);
        })

        this.reset.mousePressed(()=>{
            player.updateCount(0);
             game.update(0);
         });
         
    }

    hide(){

        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.greeting.hide();
    }

     
    

}

