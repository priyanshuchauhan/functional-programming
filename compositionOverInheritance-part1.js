class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }
}

class Fighter extends Character {
  constructor(name) {
    super(name);
    this.stamina = 100;
  }
  
  fight() {
    console.log(`${this.name} takes a mighty swing!`);
    this.stamina--;
  }
}

class Mage extends Character {
  constructor(name) {
    super(name);
    this.mana = 100;
  }
  
  cast() {
    console.log(`${this.name} casts a fireball!`);
    this.mana--;
  }
}

zapper = new Mage('Zapper');
thumper = new Fighter('Thumper');

zapper.cast();              // Zapper casts a fireball!
console.log(zapper.mana);   // 99
thumper.fight();                // Thumper takes a mighty swing!
console.log(thumper.stamina);   // 99
