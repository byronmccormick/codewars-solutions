//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
 return number % 2 === 0 ? "Even" : "Odd"
}

// OOP AND CLASS PRACTICE




 // class Dog {
 //     constructor(name, species, size){
 //         this.name = name
 //         this.species = species
 //         this. size = size
 //     }
 //     bark(size){
 //         if(this.size > 60){
 //             return "Grr Grr"
 //         }else{
 //             return "woof woof"
 //         }
 //     }
 // }
 // // TODO: define the Dog class here
 //
 // const fang = new Dog("Fang", "boarhound", 75);
 // console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
 // console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);
 //
 // const snowy = new Dog("Snowy", "terrier", 22);
 // console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
 // console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

//  class Character {
//   constructor(name, health, strength, gold, keys) {
//     this.name = name;
//     this.health = health;
//     this.strength = strength;
//     this.xp = 0; // XP is always zero for new characters
//     this.gold = 10 // start with 10
//     this.keys = 1  // start with 1
//   }
//   // Attack a target
//   attack(target) {
//     if (this.health > 0) {
//       const damage = this.strength;
//       console.log(
//         `${this.name} attacks ${target.name} and causes ${damage} damage points`
//       );
//       target.health -= damage;
//       if (target.health > 0) {
//         console.log(`${target.name} has ${target.health} health points left`);
//       } else {
//         target.gold = 0
//         target.keys = 0
//         target.health = 0;
//         const bonusXP = 10;
//         console.log(
//           `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points, ${target.gold} Gold and ${target.keys} key(s)`
//         );
//         this.gold += target.gold
//         this.keys += target.keys
//         this.xp += bonusXP;
//       }
//     } else {
//       console.log(`${this.name} can't attack (they've been eliminated)`);
//     }
//   }
//   // Return the character description
//   describe() {
//     return `${this.name} has ${this.health} health points, ${this
//       .strength} as strength and ${this.xp} XP points, ${this.gold} gold, and ${this.keys} key(s)`;
//   }
// }
// const aurora = new Character("Aurora", 150, 25);
// const glacius = new Character("Glacius", 130, 30);
//
// console.log("Welcome to the adventure! Here are our heroes:");
// console.log(aurora.describe());
// console.log(glacius.describe());
//
// const monster = new Character("Spike", 40, 20);
// console.log("A wild monster has appeared: it's named " + monster.name);
//
// monster.attack(aurora);
// monster.attack(glacius);
// aurora.attack(monster);
// glacius.attack(monster);
//
// console.log(aurora.describe());
// console.log(glacius.describe());

// let names = ["sean", "brad", "randy"]
// class BankAccount{
//     constructor(name, balance){
//         this.name = name
//         this.balance = 0
//     }
//     credit(value){
//         this.balance += value
//     }
//     describe(){
//         return `owner: ${this.name}, balance: ${this.balance}`
//     }
// }
// let accounts = names.map(name => new BankAccount(name))
// accounts.forEach((account) => {
//     account.credit(1000)
//     console.log(account.describe())
// })
