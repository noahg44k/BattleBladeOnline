"use strict";

class Game{
    constructor(){

        this.inventoryName = document.getElementById("inventoryName");
        this.inventoryClass = document.getElementById("inventoryClass");
        this.recentLogMsg = document.getElementById("recentLogMsgs");
        this.statNumbersArea = document.getElementById("statNumbersArea");

        this.logMsg(localStorage.getItem("logmsg"));
        this.logMsg(localStorage.getItem("logmsg"));
        this.logMsg(localStorage.getItem("logmsg"));
        this.logMsg(localStorage.getItem("logmsg"));
        this.logMsg(localStorage.getItem("logmsg"));

        this.setInfo();
        this.updateStats();
    }

    setInfo(){
        this.inventoryName.textContent = localStorage.getItem("name");
        this.inventoryClass.textContent = localStorage.getItem("role");
    }
    
    logMsg(logmsg){
        const newLog = document.createElement("p");
        const logText = document.createTextNode(logmsg);
    
        newLog.appendChild(logText);
        this.recentLogMsg.appendChild(newLog);
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
            console.log("UPDATING STATS...");
            if(statName!=="name")
            {
                newElem.appendChild(newElemTxt);
                this.statNumbersArea.appendChild(newElem);
                console.log("UPDATING STATS...");
            }
        }
        console.log("UPDATED STATS");
    }
}

const game = new Game();
