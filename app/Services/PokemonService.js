import { appState } from "../AppState.js";
import { saveState } from "../Utils/Store.js";
import { PlayerService } from "./PlayerService.js";

function save() {
  saveState('pokemon', appState.pokemon)
}

class PokemonService {
  awardPoint(point) {
    appState.player.points += point
    appState.emit('player')
    PlayerService.savePlayer()
  }

  setRandomPokemon() {
    const randomI = Math.floor(Math.random() * appState.pokemon.length)
    appState.activePokemon = appState.pokemon[randomI]
  }
  async getPokemon() {
    if (appState.pokemon.length) { return }
    const json = await (await fetch('pokemon.json')).json()
    appState.pokemon = json
    save()
  }

}

export const pokemonService = new PokemonService();

