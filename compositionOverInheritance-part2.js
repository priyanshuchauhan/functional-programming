const canCast = (state) => ({
    cast: (spell) => {
        console.log(`${state.name} casts ${spell}!`);
        state.mana--;
    }
})

const canFight = (state) => ({
    fight: () => {
        console.log(`${state.name} slashes at the foe!`);
        state.stamina--;
    }
})

const fighter = (name) => {
  let state = {
    name,
    health: 100,
    stamina: 100
  }
  
  return Object.assign(state, canFight(state));
}

const mage = (name) => {
  let state = {
    name,
    health: 100,
    mana: 100
  }
  
  return Object.assign(state, canCast(state));
}

const rockband = (name) => {
  let state = {
    name,
    health: 100,
    mana: 100,
    stamina: 100
  }
  
  return Object.assign(state, canCast(state), canFight(state));
}

scorcher = mage('Scorcher')
scorcher.cast('fireball');    // Scorcher casts fireball!
console.log(scorcher.mana)    // 99

kv = fighter('KV')
kv.fight();              // Slasher slashes at the foe!
console.log(kv.stamina)  // 99


ironMaiden = rockband('Iron Maiden');   
ironMaiden.fight();               // Roland slashes at the foe!
ironMaiden.cast('Holy Light');    // Roland casts Holy Light!
