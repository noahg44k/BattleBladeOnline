"use strict";

class Game{
    constructor(){

        this.inventoryName = document.getElementById("inventoryName");
        this.inventoryClass = document.getElementById("inventoryClass");
        this.recentLogMsg = document.getElementById("recentLogMsgs");
        this.statNumbersArea = document.getElementById("statNumbersArea");
        this.actionsArea = document.getElementById('actionsButtonsContainer');

        this.playerName = localStorage.getItem("name");
        this.playerClass = localStorage.getItem("role");

        Log.logmsg(localStorage.getItem("logmsg"), this.recentLogMsg);

        this.actionsArea.addEventListener('click', (evt) => {this.actions(evt);}, false);
        this.setInfo();
        this.updateStats();
    }

    setInfo(){
        this.inventoryName.textContent = this.playerName;
        this.inventoryClass.textContent = this.playerClass;
    }
    
    updateStats(){
        
        this.statNumbersArea.innerHTML = '';
        console.log("UPDATE STATS");
        console.log(localStorage.getItem("role"))
        console.log(this.inventoryClass.textContent);
        console.log(Role.getRole(this.inventoryClass.textContent));
    
        for(const [statName, statValue] of Object.entries(Role.getRole(this.inventoryClass.textContent)))
        {
            const newElem = document.createElement('p');
            const newElemTxt = document.createTextNode(`${statName}: ${statValue}`);
            if(statName!=="name")
            {
                newElem.appendChild(newElemTxt);
                this.statNumbersArea.appendChild(newElem);
            }
        }
        console.log("UPDATED STATS");
    }

    actions(evt){
        const btn = evt.target;
        
        if(!btn || btn.tagName !== 'BUTTON') return;

        try{
            switch(btn.textContent){
                case "Explore":
                    this.explore();
                    return;
                case "Sleep":
                    this.sleep();
                    return;
                case "Pray":
                    this.pray();
                    return;
                case "Inspect Player":
                    this.inspectPlayer();
                    return;
                default:
                    return;
            }
        }
        catch(err){
            console.error(err);
        }
    }

    explore(){
        Log.logmsg(`${this.playerName} is exploring!`, this.recentLogMsg);
    }
    sleep(){
        Log.logmsg(`${this.playerName} is sleeping!`, this.recentLogMsg);
    }
    pray(){
        Log.logmsg(`${this.playerName} is praying!`, this.recentLogMsg);
    }
    inspectPlayer(){
        Log.logmsg(`${this.playerName} is introspecting!`, this.recentLogMsg);
    }
}

const game = new Game();
