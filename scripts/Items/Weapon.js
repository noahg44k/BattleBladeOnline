class Weapon extends Item{
    static weaponArchive = [];
    
    constructor(maxStackCount = 1, name, description = "Weapon", damage) {
        // Call the parent class's constructor with the given arguments
        super(maxStackCount, name, description);
        
        // Additional properties specific to Weapon
        this.damage = damage;
    }
}