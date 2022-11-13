let pokeCard = document.querySelector('[data-poke-card]');
let pokeName = document.querySelector('[data-poke-name]');
let pokeImg = document.querySelector('[data-poke-img]');
let pokeImgContainer = document.querySelector('[data-poke-img-container]');
let pokeId = document.querySelector('[data-poke-id]');
let pokeTypes = document.querySelector('[data-poke-types]');
let pokeStats = document.querySelector('[data-poke-stats]');



function searchPokemon(event) {
    event.preventDefault();
    let { value } = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
        .then(data => data.json())
        .then(response => PokemonData(response))
        .catch(err => NotFound())
}





function PokemonData(data) {
    let sprite =  data.sprites.front_default;
    let { stats, types } = data;

    pokeName.textContent = data.name;
    pokeImg.setAttribute('src', sprite);
    pokeId.textContent = `Nº ${data.id}`;
    PokemonTypes(types);
    PokemonStats(stats);
}




function PokemonTypes(types) {
    pokeTypes.innerHTML = '';
    types.forEach(type => {
        let typeTextElement = document.createElement("div");
        typeTextElement.textContent = type.type.name;
        pokeTypes.appendChild(typeTextElement);
    });
}




function PokemonStats(stats) {
    pokeStats.innerHTML = '';
    stats.forEach(stat => {
        let statElement = document.createElement("div");
        let statElementName = document.createElement("div");
        let statElementAmount = document.createElement("div");
        statElementName.textContent = stat.stat.name;
        statElementAmount.textContent = stat.base_stat;
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementAmount);
        pokeStats.appendChild(statElement);
    });
}



function NotFound() {
    pokeName.textContent = 'Pokemon no encontrado';
    pokeImg.setAttribute('src', 'sadpika.png');
    pokeTypes.innerHTML = '';
    pokeStats.innerHTML = '';
    pokeId.textContent = '';
}