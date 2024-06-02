"use strict";

class Game{
    constructor(){

        this.inventoryName = document.getElementById("inventoryName");
        this.inventoryClass = document.getElementById("inventoryClass");
        this.recentLogMsg = document.getElementById("recentLogMsgs");
        this.statNumbersArea = document.getElementById("statNumbersArea");
        this.actionsArea = document.getElementById('actionsButtonsContainer');
        this.interfaceArea = document.getElementById('interface');

        this.playerName = localStorage.getItem("name");
        this.playerClass = localStorage.getItem("role");

        Log.logmsg(localStorage.getItem("logmsg"), this.recentLogMsg);

        this.actionsArea.addEventListener('click', (evt) => {this.actions(evt);}, false);
        this.interfaceArea.addEventListener('click', (evt) => {this.interface(evt);}, false);
        this.setInfo();
        this.updateStats();

        this.characterBox = 
        `<div class="characterBox">
            <img class="pixelart" src="sprites/Cotorel.png" alt="cotorel - a thief-like class proficient with small blades.">
            <img class="pixelart" src="sprites/Sorcerer.png" alt="cotorel - a thief-like class proficient with small blades.">
            <img class="pixelart" src="sprites/Knight.png" alt="cotorel - a thief-like class proficient with small blades.">
            <img class="pixelart" src="sprites/Barren.png" alt="cotorel - a thief-like class proficient with small blades.">
            <img class="pixelart" src="sprites/Arbalist.png" alt="cotorel - a thief-like class proficient with small blades.">
        </div>`

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

    interface(evt){
        const btn = evt.target;
        
        if(!btn || btn.tagName !== 'BUTTON') return;

        try{
            switch(btn.textContent){
                case "Fight!":
                    this.fight();
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
        this.interfaceArea.innerHTML = Encounter.randomEncounter();
        Log.logmsg(`${this.playerName} ${Encounter.logMsg}`, this.recentLogMsg);
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
    fight(){
        Log.logmsg(`${this.playerName} has entered battle!`, this.recentLogMsg);
    }
}

const game = new Game();
