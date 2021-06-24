// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }
  attack(){
    return this.strength;
  }
  receiveDamage(damage){
    this.health-=damage;
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage){
    this.health-=damage;
    if (this.health < 1){
      return `${this.name} has died in act of combat`
    } else {
      return `${this.name} has received ${damage} points of damage`;
    }
  }
  battleCry(){
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier{
  receiveDamage(damage){
    this.health-=damage;
    if (this.health < 1){
      return `A Saxon has died in combat`
    } else {
      return `A Saxon has received ${damage} points of damage`;
    }
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking){
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }
  vikingAttack(){
    let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
    let result = randomSaxon.receiveDamage(randomViking.strength); 
    if ( result === "A Saxon has died in combat"){
      this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon),1);
    }
    return result;
  }
  saxonAttack(){
    let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
    let result = randomViking.receiveDamage(randomSaxon.strength); 
    if ( result === `${randomViking.name} has died in act of combat`){
      this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking),1);
    }
    return result;
  }
  //bonus method Iteration 5 takes viking or saxon
  plannedAttack(attacker){
    let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
    let result = attacker.toLowerCase === "viking" ? randomSaxon.receiveDamage(randomViking.strength) : randomViking.receiveDamage(randomSaxon.strength);
    if (result.includes("Saxon") && result.includes("died")){
      this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon),1);
    } else if (result.includes("died")){
      this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking),1);
    }
    return result;
  }

  showStatus(){
    if (!this.saxonArmy[0] || this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!";
    } else if (!this.vikingArmy[0] || this.vikingArmy.length === 0){
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
