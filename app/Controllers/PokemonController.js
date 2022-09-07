import { appState } from "../AppState.js";
import { pokemonService } from "../Services/PokemonService.js";
import { setHTML } from "../Utils/Writer.js";


function drawActivePokemon() {
  const pokemon = appState.activePokemon
  if (!pokemon) { return }
  setHTML('stage', pokemon.CardTemplate)
}


export class PokemonController {
  constructor() {
    this.getPokemon()
    appState.on('activePokemon', drawActivePokemon)

  }

  async getPokemon() {
    try {
      await pokemonService.getPokemon()
      this.setRandomPokemon()
    } catch (error) {
      console.error(error)
    }
  }

  setRandomPokemon() {
    pokemonService.setRandomPokemon()
  }

  answer(point){
    pokemonService.awardPoint(point)
    this.setRandomPokemon()
  }



}