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
    static crossbowmanStats = {
        name: "crossbowman",
        maxHp: 90,
        strength: 8,
        speed: 5,
        intelligence : 4,
        perception: 8
    };
    static alchemistStats = {
        name: "alchemist",
        maxHp: 85,
        strength: 2,
        speed: 7,
        intelligence : 10,
        perception: 6
    };
    static roles = {
        knight: new Role(this.knightStats), 
        cotorel: new Role(this.cotorelStats), 
        crossbowman: new Role(this.crossbowmanStats), 
        alchemist: new Role(this.alchemistStats)
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
