let roleImg = document.getElementById("role-img");
let roleDropdown = document.getElementById("role");
let roleSelected = roleDropdown.value;
const playerNameTxt = document.getElementById("playerNameTitle");
const playerRoleTxt = document.getElementById("roleDisplay");
const nameInput = document.getElementById("name");
const roleInput = document.getElementById("role");

roleDropdown.addEventListener("change", function() {
    updateRoleImage(roleDropdown.value);
});

function updateRoleImage(roleSelected) {
    switch (roleSelected) {
        case "alchemist":
            roleImg.src = "sprites/alchemy.png";
            break;
        case "knight":
            // Handle other roles
            roleImg.src = "sprites/helmet.png";
            break;
        case "cotorel":
            roleImg.src = "sprites/knife.png";
            break;
        case "crossbow":
            roleImg.src = "sprites/crossbow.png";
            break;
        // Add more cases for other roles if needed

        default:
            // Set a default image or handle unexpected values
            roleImg.src = "sprites/skull.png";
    }
}

function updateStats(){
    playerNameTxt.textContent = nameInput.value;
    playerRoleTxt.textContent = roleInput.value;

    if(playerNameTxt.textContent === ""){
        playerNameTxt.textContent = "Name";
    }

    
}

nameInput.addEventListener("input", updateStats, false);
roleDropdown.addEventListener("change", updateStats, false);

class Role{

    constructor(name, maxHp, strength, speed, intelligence, perception){
        this.name = name;
        this.maxHp = maxHp;
        this.strength = strength;
        this.speed = speed;
        this.intelligence = intelligence;
        this.perception = perception;
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