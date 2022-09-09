import {gql} from "@apollo/client";

export const GETDEMOPOKEMONS = gql`
query pokeApiquery($limit: Int, $offset: Int) {
  pokemon_v2_pokemon(limit: $limit, offset: $offset) {
    id
    name
    pokemon_v2_pokemonsprites {
      sprites
    }
  }
}

`

export const GETPOKEMONBYID = gql `
query getPoke($id:Int){
  pokemon_v2_pokemon(where: {id: {_eq: $id}}) {
    id
    name
    pokemon_v2_pokemontypes {
      pokemon_v2_type {
        name
      }
    }
    pokemon_v2_pokemonspecy {
      base_happiness
      capture_rate
      hatch_counter
    }
    pokemon_v2_pokemonsprites {
      sprites
    }
  }
  pokemon_v2_evolutionchain(where: {id: {_eq: $id}}) {
    pokemon_v2_pokemonspecies {
      id
      pokemon_v2_pokemons {
        pokemon_v2_pokemonsprites {
          sprites
        }
      }
    }
  }
}
`
