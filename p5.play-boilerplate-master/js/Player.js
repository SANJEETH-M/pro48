class Player {

    constructor(){
        this.index = 0;
        this.distance = 0;
        this.name = null;
        this.rank = null;
    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
            playerCount = data.val();
          })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount:count
        });
    
    }

    update(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        });

        
    }

    getBikesAtEnd(){
        database.ref('BikesAtEnd').on("value",(data)=>{
            this.rank = data.val();
        })
    }

    static updateBikesAtEnd(rank){
        database.ref('/').update({
            BikesAtEnd:rank
        })
    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref('player');
        playerInfoRef.on("value",(data)=>{
            allPlayers = data.val();
        })
    }
}