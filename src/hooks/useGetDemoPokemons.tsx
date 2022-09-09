import {useQuery} from "@apollo/client";
import {PokemonDemo} from "../models";
import {useState} from "react";
import {GETDEMOPOKEMONS} from "../queries/Queries";

export const useGetDemoPokemons = () => {

    const [data, setData] = useState<PokemonDemo[]>([]);
    const [offset, setOffset] = useState(0);
    const limit = 50;
    const [isLoading, setIsLoading] = useState(true);

    const setDataArray = (res:any) => {
        let pokemonList: PokemonDemo[] = data;
        res.map((pokemon: any) => {
            const sprites = JSON.parse(pokemon.pokemon_v2_pokemonsprites[0].sprites)
            pokemonList.push({
                id: pokemon.id,
                name: pokemon.name,
                showingImage:sprites.front_default,
                frontImage: sprites.front_default,
                animated: sprites.versions["generation-v"]["black-white"].animated.front_default,
            })
        })
        setData(pokemonList)
    }


    const {fetchMore} = useQuery(GETDEMOPOKEMONS, {
        variables: {
            offset: 0,
            limit: limit,
        },
        onCompleted: r => {
            setDataArray(r.pokemon_v2_pokemon)
            setIsLoading(false)
        },
        onError: e => console.log(e),
    })

    const fetchMoreData = () => {
        return fetchMore({
            variables: {
                offset: offset + limit,
                limit: limit
            },
        }).then(r => {
            setDataArray(r.data.pokemon_v2_pokemon)
            setOffset(offset + limit);
        })
    }

    return {
        isLoading: isLoading,
        fetchMore: fetchMoreData,
        data: data,
        offset: offset,
    }
}