import { v4 as uuidv4 } from 'uuid';

// Make an abstract class (InventoryItem) with id, name, price, description.
//Worry about private and public stuff later

abstract class InventoryItem {
    private id: string;
    private name: string;
    private price:number;
    private description: string

    constructor(name:string, price:number, description:string){
        this.id = uuidv4()
        this.name = name
        this.price = price
        this.description = description
    }
}
// Create a class named Weapon that extends InventoryItem:
//         
//       Use super() to call the parent class constructor.
//         Implement a getter and setter for the damage & range attribute.

class Weapon extends InventoryItem{
    private damage:number

    constructor(name: string, price: number, description:string, damage:number){
        super(name,price,description);
        this.damage = damage
    }

    getDamage(): number {
        return this.damage
    }

    setDamage(damage:number): void {
        this.damage = damage
    }
}
// Make a child class of InventoryItem called Armor. Make sure it has damage attribute...i can make private
// Worry about constructor later.

class Armor extends InventoryItem {
    private defense: number

    constructor(name: string, price: number, description:string, defense:number){
        super(name, price, description);
        this.defense = defense
    }

    getDefense(): number {
        return this.defense
    }

    setDefense(defense:number): void {
        this.defense = defense
    }



}
//Create a class called Character with id , name, archtype, fighting style, inventory.
// Worry about ........... private and public getters/setters later

class Character {
    id: string;
    name: string;
    archtype: string;
    fightingStyle: 'ranged' | 'melee';
    inventory: InventoryItem[];

    constructor(name: string, archtype:string, fightingStyle :'ranged'|'melee'){
        this.id = uuidv4()
        this.name = name
        this.archtype = archtype
        this.fightingStyle = fightingStyle
        this.inventory = []
    }
};
const character1= new Character('Lyla',"Rouge Elf","ranged")
const character2= new Character('Toby','Undead','melee')
console.log(character1,'character test')
///     Create a Character.




//Create a class Inventory with the attributes items with array of InventoryItems
// Worry about setters/getters later

class Inventory {
    private _inventoryitems: InventoryItem[];

    constructor() {
        this._inventoryitems = [];
    }

    get inventoryitems(): InventoryItem[] {
        return this._inventoryitems;
    }

    set inventoryitems(items: InventoryItem[]) {
        this._inventoryitems = items;
    }
}
const inventory = new Inventory()
const invitem1 = new Weapon('rock',1,'just a rock',1)
const invitem2 = new Armor('shirt',1,'plain white tee',0)
inventory.inventoryitems=[invitem1,invitem2]
console.log(`inventory test===============`,inventory.inventoryitems)






//setter and getter for inventory 


// - Shop Class Methods:
//     - constructor
//         - The constructor will create three (3) Items and add them to the list of items in the shop
class Store {
    items: InventoryItem[];

    constructor() {
        this.items = [];
        // this.createShopItems();
    }

    get storeitems(): InventoryItem[] {
        return this.items;
    }

    set storeitems(items: InventoryItem[]) {
        this.items = items;
    }

}
const store = new Store()
const storeitem1 = new Weapon('dagger',50,'old dagger',25)
const storeitem2 = new Armor('chain mail',100,'worn chain mail',80)
store.storeitems=[storeitem1,storeitem2]
console.log(`store test===============`,store.storeitems)





//     Create an Inventory.
//    Methods:
// ----add items from the inventory to the character's inventory,
function addToInventory(item: InventoryItem, character: Character){
    character.inventory.push(item)
}

// ----print the inventory,
// function printInventory(character: Character){
//     console.log(character.inventory)
// }

// ----remove all instances of a singular item from the inventory,
function removeAllInstanceOfItem(item: InventoryItem, character: Character){
    character.inventory = character.inventory.filter(i => i != item)
}

// ----remove a specified quantity from the inventory. quantity = 3, item = Sword character = Sean    (seans inventory= [Sword, Mace, GirlsMace, Shield, Sword, , Sword, Shield, Sword])
function removeSpecifiedQuantity (quantity: number,item: InventoryItem, character:Character  ){
    let count = 0
    character.inventory = character.inventory.filter(i => {
        if (i === item && count < quantity){
            count++
            return false
        }
        return true
    })

}
console.log(`${character1.name} is a ${character1.archtype} with a ${character1.fightingStyle} fighting style`)
console.log(`${character2.name} is a ${character2.archtype} with a ${character2.fightingStyle} fighting style`)












