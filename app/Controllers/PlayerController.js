import { appState } from "../AppState.js";
import { PlayerService } from "../Services/PlayerService.js";
import { setHTML } from "../Utils/Writer.js";

function drawPlayer() {
  if (!appState.player) { return }
  setHTML('player-stats', /*html*/`
    <div class="d-flex align-items-center justify-content-between p-3">
      <div>
        <button type="button" class="btn text-white" onclick="app.playerController.resetPlayer()"> 
          <strong>${appState.player.name}</strong>
        </button>
      </div>
      <div>
        <button class="btn text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#pokedex" onclick="app.playerController.drawPokedex()">
          <strong>${appState.player.points}</strong>
        </button>
      </div>
    </div>
  `)
}


function drawPokedex(query = '') {
  query = query.toLowerCase()
  let pokemon = appState.player.pokedex
  if (query.length) {
    pokemon = appState.player.pokedex.filter(p => p.name.includes(query))
  }
  
  let t = ''
  pokemon.forEach(p => t += p.PokedexEntry)
  setHTML('captures', t)
}


export class PlayerController {
  constructor() {
    appState.on('player', drawPlayer)
    drawPlayer()
  }

  resetPlayer() {
    const yes = confirm('Do you want to reset your player?')
    if (!yes) { return }
    PlayerService.resetPlayer()
  }

  filterPokedex() {
    // @ts-ignore
    let query = window.event.target.value
    drawPokedex(query)
  }
  drawPokedex() {
    drawPokedex()
  }

}