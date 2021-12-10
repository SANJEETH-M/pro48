class Game {

    constructor(){
        this.resetTitle = createElement("h2");
        this.resetButton = createElement();
        this.leaderboardTitle = createElement("h2");
        this.bike1 = createElement("h2");
        this.bike2 = createElement("h2");
        this.bike3 = createElement("h2");
        this.bike4 = createElement("h2");

    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState: state
        });
    }



    async start(){

        if (gameState ===0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form();
           // fuels = new Group();
            form.display();
        }

        bike1 = createSprite(70,220);
        bike1.addImage("bike1",bike1_img);
        bike1.scale=0.2;

        bike2 = createSprite(70,330);
        bike2.addImage("bike2",bike2_img);
        bike2.scale=0.2;

        bike3 = createSprite(70,440);
        bike3.addImage("bike3",bike3_img);
        bike3.scale=0.2;

        bike4 = createSprite(70,550);
        bike4.addImage("bike4",bike4_img);
        bike4.scale=0.2;


        bikes = [bike1,bike2,bike3,bike4]

        // Adding fuel sprite in the game
    //this.addSprites(fuels, 4, fuelImage, 0.02);

    }

    play(){
        form.hide();
        Player.getPlayerInfo();
        player.getBikesAtEnd();


        if (allPlayers !== undefined){
        
            background("black");
            image(track,0,0,displayWidth*5,displayHeight);

            var index = 0
            var x = 185;
            var y;

            for(var plr in allPlayers){
            index = index + 1;
            x = x + 200
            y = displayHeight-allPlayers[plr].distance;
            bikes[index-1].x=x;
            bikes[index-1].y = y;

            if(index === player.index){
                stroke(10);
                fill("orange");
                ellipse(x,y,50,50);
                bikes[index -1].shapeColor = "orange";
                camera.position.x = displayWidth/2;
                camera.position.y = bikes[index-1].y;
            }
        }
        }
        
        if(keyIsDown(LEFT_ARROW) && player.index !== null){
            player.distance +=10
            player.update();
          }
      
          if(player.distance > 3860){
            gameState = 2;
            player.rank+=1;
            Player.updateCarsAtEnd(player.rank);
      
          }

          drawSprites();     
    }
    end(){
        console.log("Game Ended");
        console.log(player.rank);
      }
}