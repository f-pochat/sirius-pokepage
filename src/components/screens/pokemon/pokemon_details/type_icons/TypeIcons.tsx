import React from 'react';
import {
    bugIcon,
    darkIcon,
    dragonIcon,
    electricIcon,
    fairyIcon,
    fightingIcon,
    fireIcon,
    flyingIcon,
    ghostIcon,
    grassIcon,
    groundIcon,
    iceIcon,
    normalIcon,
    poisonIcon,
    psychicIcon,
    rockIcon,
    steelIcon,
    waterIcon
} from '../../../../../assets/icons';

const pokemonIcons = {
    bug: bugIcon,
    dark: darkIcon,
    dragon: dragonIcon,
    electric: electricIcon,
    fairy: fairyIcon,
    fighting: fightingIcon,
    fire: fireIcon,
    flying: flyingIcon,
    ghost: ghostIcon,
    grass: grassIcon,
    ground: groundIcon,
    ice: iceIcon,
    normal: normalIcon,
    poison: poisonIcon,
    psychic: psychicIcon,
    rock: rockIcon,
    steel: steelIcon,
    water: waterIcon
}

const TypeIcons = (props:any) => {
    return (

        <div className='types'>
            {
                props.data.types.map((t:any) => {
                    return(
                        //@ts-ignore
                        <img key={t.pokemon_v2_type.name} style={{width: 50, margin: 10}} src={pokemonIcons[t.pokemon_v2_type.name]} alt="Icon"/>
                    )
                })
            }
        </div>
    );
};

export default TypeIcons;