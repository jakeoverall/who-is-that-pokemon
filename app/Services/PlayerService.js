import { appState } from "../AppState.js";
import { saveState } from "../Utils/Store.js";

export class PlayerService {
  static savePlayer() {
    saveState('player', appState.player)
  }

  static resetPlayer() {
    appState.player = { name: prompt('What is your Name?') || '', points: 0 }
  }

}