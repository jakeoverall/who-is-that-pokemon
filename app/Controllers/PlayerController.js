import { appState } from "../AppState.js";
import { PlayerService } from "../Services/PlayerService.js";
import { setHTML } from "../Utils/Writer.js";

function drawPlayer() {
  if (!appState.player) { return }
  setHTML('player-stats', /*html*/`
    <div class="d-flex align-items-center justify-content-between p-4">
      <div>
        <strong>${appState.player.name}</strong>
      </div>
      <div>
        <strong>${appState.player.points}</strong>
      </div>
    </div>
  `)
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

}