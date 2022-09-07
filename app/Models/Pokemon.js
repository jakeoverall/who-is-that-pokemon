
export class Pokemon {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.picture = 'assets/pokemon/' + data.id + '.png'
  }

  get CardTemplate() {
    return /*html*/`
      <div class="pokemon-container">
        <img src="${this.picture}" alt="" class="pokemon-picture img-fluid">

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
}
