"use strict";

class CharacterCreator{
    constructor(){
        this.roleImg = document.getElementById("role-img");
        this.roleDropdown = document.getElementById("role");
        this.roleSelected = this.roleDropdown.value;
        this.playerNameTxt = document.getElementById("playerNameTitle");
        this.playerRoleTxt = document.getElementById("roleDisplay");
        this.nameInput = document.getElementById("name");
        this.createBtn = document.getElementById("character-creation-create");
        this.statNumbersArea = document.getElementById("statNumbers");
        this.nameAndRole = document.getElementById('left');

        // ROLES
        this.knightStats = {
            name: "knight",
            maxHp: 100,
            strength: 10,
            speed: 5,
            intelligence : 2,
            perception: 5
        };
        this.cotorelStats = {
            name: "cotorel",
            maxHp: 80,
            strength: 5,
            speed: 9,
            intelligence : 4,
            perception: 6
        };
        this.crossbowmanStats = {
            name: "crossbowman",
            maxHp: 90,
            strength: 8,
            speed: 5,
            intelligence : 4,
            perception: 8
        };
        this.alchemistStats = {
            name: "alchemist",
            maxHp: 85,
            strength: 2,
            speed: 7,
            intelligence : 10,
            perception: 6
        };
        this.roles = {
            knight: new Role(this.knightStats), 
            cotorel: new Role(this.cotorelStats), 
            crossbowman: new Role(this.crossbowmanStats), 
            alchemist: new Role(this.alchemistStats)
        };

        this.createBtn.addEventListener('click', () => {
            this.createCharacter();
            this.openWindow('game.html');
        }, false);
        this.nameInput.addEventListener("input", () => {this.updateName();}, false);
        this.nameAndRole.addEventListener('keyup', (event) => {
            if(event.target.tagName === 'INPUT'){
                this.enableCreate();
            }
        });
        this.nameAndRole.addEventListener('change', (event) => {
            if(event.target.tagName === 'SELECT'){
                this.updateRoleImage(this.roleDropdown.value);
                this.enableCreate();
                this.updateStats();
            }
        });
        this.enableCreate();
    }

    
    // UI
    
    enableCreate(){
        // IF EITHER NAME IS EMPTY OR ROLE IS "SELECT ROLE", BUTTON IS DISABLED
        if(this.roleDropdown.selectedIndex !== 0 && this.nameInput.value !== ''){
            this.createBtn.removeAttribute('disabled');
            this.createBtn.classList.remove("disabled");
        }
        else{
            this.createBtn.setAttribute('disabled', 'disabled');
            this.createBtn.classList.add("disabled");
        }
    }
    
    updateRoleImage(roleSelected) {
        switch (roleSelected) {
            case "alchemist":
                this.roleImg.src = "sprites/alchemy.png";
                break;
            case "knight":
                // Handle other roles
                this.roleImg.src = "sprites/helmet.png";
                break;
            case "cotorel":
                this.roleImg.src = "sprites/knife.png";
                break;
            case "crossbowman":
                this.roleImg.src = "sprites/crossbow.png";
                break;
            // Add more cases for other roles if needed
    
            default:
                // Set a default image or handle unexpected values
                this.roleImg.src = "sprites/skull.png";
        }
    }
    
    updateName(){
        this.playerNameTxt.textContent = this.nameInput.value;
    
        if(this.playerNameTxt.textContent === ""){
            this.playerNameTxt.textContent = "Name";
        }
    }
    
    updateStats(){
        if(this.roleDropdown.value.toLowerCase() !== "select"){

            this.playerRoleTxt.textContent = this.roleDropdown.value;
            this.statNumbersArea.innerHTML = '';
        
            for(const [statName, statValue] of Object.entries(this.getRole(this.playerRoleTxt.textContent)))
            {
                const newElem = document.createElement('h3');
                newElem.className = 'h3';
                const newElemTxt = document.createTextNode(`${statName}: ${statValue}`);
                if(statName!=="name")
                {
                    newElem.appendChild(newElemTxt);
                    this.statNumbersArea.appendChild(newElem);
                }
            }
        }
        else{
            
            this.playerRoleTxt.textContent = "";
            this.statNumbersArea.innerHTML = "";

        }
    }
    
    createCharacter(){
        localStorage.setItem('name', this.playerNameTxt.textContent);
        localStorage.setItem('role', this.playerRoleTxt.textContent);
    }

    getRole(name){
        for (const roleName in this.roles) {
            if (this.roles.hasOwnProperty(roleName)) {
                const role = this.roles[roleName];
                if (role.name.toLowerCase() === name.toLowerCase()) {
                    return role;
                }
            }
        }
        return false;
    }

    openWindow(link){
        window.open(link, "_self");
    }
}

class Game{

}

class Role{
    
    constructor(stats){
        Object.assign(this, stats);
        this.hp = this.maxHp;
        this.xp = 0;
        this.lvl = 1;
    }

    takeDamage(dmg) {
        this.hp -= dmg;
    }

    addXP(xp)
    {
       this.xp += xp; 
    }

    lvlUp(){
        this.lvl++;
    }

}

const cc = new CharacterCreator();
