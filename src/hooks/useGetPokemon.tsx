import {useState} from "react";
import {useQuery} from "@apollo/client";
import {GETPOKEMONBYID} from "../queries/Queries";
import {Pokemon} from "../models";

export const useGetPokemon = (id: number) => {
    const [data, setData] = useState<Pokemon>();
    const [isLoading, setIsLoading] = useState(true);

    const setPokemon = (res:any) => {
        const sprites = JSON.parse(res.pokemon_v2_pokemon[0].pokemon_v2_pokemonsprites[0].sprites)
        const evolution: {
            id: number,
            image: string,
        }[]= [];
        res.pokemon_v2_evolutionchain[0]?.pokemon_v2_pokemonspecies.map((ev:any) => {
            evolution.push({
                id: ev.id,
                image: JSON.parse(ev.pokemon_v2_pokemons[0].pokemon_v2_pokemonsprites[0].sprites).front_default
            })
        })

        setData({
            id: res.pokemon_v2_pokemon[0].id,
            name: res.pokemon_v2_pokemon[0].name,
            frontImage: sprites.front_default,
            backImage: sprites.back_default,
            types: res.pokemon_v2_pokemon[0].pokemon_v2_pokemontypes,
            evolution: evolution,
            //Stats
            baseHappines: res.pokemon_v2_pokemon[0].pokemon_v2_pokemonspecy.base_happiness,
            captureRate: res.pokemon_v2_pokemon[0].pokemon_v2_pokemonspecy.capture_rate,
            hatchCounter: res.pokemon_v2_pokemon[0].pokemon_v2_pokemonspecy.hatch_counter,
        })
    }

    useQuery(GETPOKEMONBYID, {
        variables: {
            id: id,
        },
        onCompleted: r => {
            setPokemon(r)
            setIsLoading(false)
        },
        onError: e => console.log(e),
    })

    return {
        isLoading: isLoading,
        data: data,
    }
}