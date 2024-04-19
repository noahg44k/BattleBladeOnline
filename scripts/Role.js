"use strict";

class Role{
    
    constructor(stats){
        Object.assign(this, stats);
        this.hp = this.maxHp;
        this.xp = 0;
        this.lvl = 1;
    }
    // ROLES
    static knightStats = {
        name: "knight",
        maxHp: 100,
        strength: 10,
        speed: 5,
        intelligence : 2,
        perception: 5
    };
    static cotorelStats = {
        name: "cotorel",
        maxHp: 80,
        strength: 5,
        speed: 9,
        intelligence : 4,
        perception: 6
    };
    static arbalistStats = {
        name: "arbalist",
        maxHp: 90,
        strength: 8,
        speed: 5,
        intelligence : 4,
        perception: 8
    };
    static sorcererStats = {
        name: "sorcerer",
        maxHp: 85,
        strength: 2,
        speed: 7,
        intelligence : 10,
        perception: 6
    };
    static barrenStats = {
        name: "barren",
        maxHp: 70,
        strength: 1,
        speed: 1,
        intelligence : 1,
        perception: 1
    };
    static roles = {
        knight: new Role(this.knightStats), 
        cotorel: new Role(this.cotorelStats), 
        arbalist: new Role(this.arbalistStats), 
        sorcerer: new Role(this.sorcererStats),
        barren: new Role(this.barrenStats)
    };

    static takeDamage(dmg) {
        this.hp -= dmg;
    }

    static addXP(xp)
    {
       this.xp += xp; 
    }

    static lvlUp(){
        this.lvl++;
    }

    static getRole(name){
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

}
