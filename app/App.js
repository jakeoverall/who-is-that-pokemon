import { PlayerController } from "./Controllers/PlayerController.js";
import { PokemonController } from "./Controllers/PokemonController.js";

class App {
  playerController = new PlayerController()
  pokemonController = new PokemonController()
}

window["app"] = new App();
