import { appState } from "../AppState.js";
import { saveState } from "../Utils/Store.js";
import { PlayerService } from "./PlayerService.js";

function save() {
  saveState('pokemon', appState.pokemon)
}

class PokemonService {
  awardPoint(point) {
    if (point > 0) {
      appState.player.pokedex.push(appState.activePokemon)
      this.removePokemon()
    }
    appState.player.points += point
    appState.emit('player')
    PlayerService.savePlayer()
  }

  setRandomPokemon() {
    const randomI = Math.floor(Math.random() * appState.pokemon.length)
    appState.activePokemon = appState.pokemon[randomI]
  }
  
  async getPokemon(forceReset) {
    if (appState.pokemon.length && !forceReset) { return }
    const json = await (await fetch('pokemon.json')).json()
    appState.pokemon = json
    save()
  }

  removePokemon() {
    appState.pokemon = appState.pokemon.filter(p => p.id != appState.activePokemon.id)
    saveState('pokemon', appState.pokemon)
  }

}

export const pokemonService = new PokemonService();

