
export class Pokemon {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.picture = 'assets/pokemon/' + data.id + '.png'
    // this.types = data.types // TODO add Type badges for pokedex
  }

  get CardTemplate() {
    return /*html*/`
      <div class="pokemon-container">
        <img src="${this.picture}" alt="" class="pokemon-picture img-fluid" onerror="app.pokemonController.errorSkip();">

      <div class="on-hover">
          <h4 class="text-capitalize my-3">
            ${this.name}
          </h4>
          <button class="btn" onclick="app.pokemonController.answer(-1)">Incorrect</button>
          <button class="btn btn-success" onclick="app.pokemonController.answer(1)">Correct</button>
        </div>
      </div>
    `
  }

  get PokedexEntry() {
    return /*html*/`
      <div>
        <p>
          <img src="${this.picture}" height="65" alt="" loading="lazy">
          <b class="ms-3 text-capitalize">${this.name}</b>
        </p>
      </div>
    `
  }
}
