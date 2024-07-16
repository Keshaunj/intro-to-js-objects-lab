const pokemon = require('./data.js')

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
    
  }
  
  

//excersice 1 
 
//console.dir(pokemon, { maxArrayLength: [58] })
//console.log(indexOF[59])
const pokemonName = pokemon[59] && pokemon[59].name;
console.log(pokemonName);


// Exercise 2

//console.log(game)

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/
//difficulty level for game
game.difficulty = "medium"; // new dot noation also add a value to the difficulty that a medium leveled difficitly

//console.log(game.difficulty)

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/
const squirtle = { number: 7, name: "Squirtle", type: "water", hp: 44, starter: true };
game.party.unshift(squirtle);  // .unshift() - deifnes as  Adds one or more elements to the beginning of an array and returns the new length of the array. Using this method becuase its sound werid because .push() sounds better but just for pratice.

//{ number: 7, name: "Squirtle", type: "water", hp: 44, starter: true }, i - think only two pokemons where true not falsey


console.log(game) // uncomment console.log when needed
