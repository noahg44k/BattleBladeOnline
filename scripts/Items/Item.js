class Item{
    static itemArchive = [];

    constructor(maxStackCount = 15, name, description = "Item"){
        this.maxStackCount = maxStackCount;
        this.name = name;
        this.description = description;
    }

    static async loadArchive(fileUrl){
        const fileReader = new FileReader(fileUrl);

        // Call the async method from the class instance
        const items = await fileReader.fetchAndParseFile();
        return items;
    }

    static getItem(itemName){
        for(const item of Item.itemArchive){
            if(item.name === itemName){
                return item;
            }
        }
        Log.logmsg("Could not find " + itemName);
        return null;
    }
}

Item.itemArchive = Item.loadArchive('items.txt');
Weapon.weaponArchive = Item.loadArchive('weapons.txt');
Armor.armorArchive = Item.loadArchive('armor.txt');