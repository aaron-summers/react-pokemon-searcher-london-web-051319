const url = 'http://localhost:3000/pokemon';

const fetchPokemon = () => {
    return fetch(url).then(res => res.json())
}

const dbStructure = (pokemon) => ({
    "height": 10,
    "weight": 130,
    "name": pokemon.name,
        "abilities": [
            "overgrow",
            "chlorophyll"
        ],
        "moves": [],
        "stats": [{
                "value": 80,
                "name": "special-defense"
            },
            {
                "value": 80,
                "name": "special-attack"
            },
            {
                "value": 63,
                "name": "defense"
            },
            {
                "value": 62,
                "name": "attack"
            },
            {
                "value": 60,
                "name": "speed"
            },
            {
                "value": pokemon.hp,
                "name": "hp"
            }
        ],
        "types": [
            "grass",
            "poison"
        ],
        "sprites": {
            "front": pokemon.frontUrl,
            "back": pokemon.backUrl
        }
})
    
const postPokemon = (pokemon) => {
   return fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(dbStructure(pokemon))
    }).then(res => res.json())
}

export default {
    fetchPokemon,
    postPokemon
}