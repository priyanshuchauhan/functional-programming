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

morto = new Mage('Morto');
kv = new Fighter('KV');

morto.cast();              // Zapper casts a fireball!
console.log(morto.mana);   // 99
kv.fight();                // Thumper takes a mighty swing!
console.log(thumper.stamina);   // 99
