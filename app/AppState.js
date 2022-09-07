import { Pokemon } from "./Models/Pokemon.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

function loadPlayer() {
  // @ts-ignore
  const player = JSON.parse(window.localStorage.getItem('player')) || { name: prompt('What is your Name?'), points: 0 }
  return player
}

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', Value)

  /** @type {{name: string, points: number}} */
  player = loadPlayer()

  /** @type {import('./Models/Pokemon').Pokemon[]} */
  pokemon = loadState('pokemon', Pokemon)

  /** @type {import('./Models/Pokemon').Pokemon} */
  // @ts-ignore
  activePokemon = null
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
