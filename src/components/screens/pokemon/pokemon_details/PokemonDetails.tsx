import React from 'react';
import './PokemonDetails.css';
import PokemonStats from "./pokemon_stats/PokemonStats";
import TypeIcons from "./type_icons/TypeIcons";

const PokemonDetails = (props:any) => {

    return (
        <div className='details-container'>
            <h1>{props.data.name[0].toUpperCase() + props.data.name.substring(1)}</h1>
            <TypeIcons data={props.data}/>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                {
                    props.data.evolution.map((ev:any) => {
                        return(
                            <a key={ev.id} href={'/'+ev.id}>
                                <img src={ev.image} alt="" className='ev-image'/>
                            </a>
                        )
                    })
                }
            </div>
            <PokemonStats data={props.data}/>
        </div>
    );
};

export default PokemonDetails;