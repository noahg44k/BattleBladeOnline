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

        if(this.createBtn){
            this.createBtn.addEventListener('click', () => {
                this.createCharacter();
                this.openWindow('game.html');
            }, false);
        }
        if(this.nameInput){
            this.nameInput.addEventListener("input", () => {this.updateName();}, false);
        }
        if(this.nameAndRole){
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
        }
        if(this.createBtn){
            this.enableCreate();
        }
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
            case "sorcerer":
                this.roleImg.src = "sprites/book.png";
                break;
            case "knight":
                // Handle other roles
                this.roleImg.src = "sprites/helmet.png";
                break;
            case "cotorel":
                this.roleImg.src = "sprites/knife.png";
                break;
            case "arbalist":
                this.roleImg.src = "sprites/crossbow.png";
                break;
            case "barren":
                this.roleImg.src = "sprites/sun.png";
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
        
            for(const [statName, statValue] of Object.entries(Role.getRole(this.playerRoleTxt.textContent)))
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
        localStorage.setItem('logmsg', "Welcome to Battle Blade Online, " + this.playerNameTxt.textContent + "!");
    }

    openWindow(link){
        window.open(link, "_self");
    }
}

const cc = new CharacterCreator();
