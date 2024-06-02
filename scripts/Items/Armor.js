class Armor extends Item{
    static armorArchive = [];

    constructor(maxStackCount = 1, name, description = "Armor", defenseRating) {
        // Call the parent class's constructor with the given arguments
        super(maxStackCount, name, description);
        
        // Additional properties specific to Weapon
        this.defenseRating = defenseRating;
    }
}