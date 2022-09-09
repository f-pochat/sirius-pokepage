import React, {useState} from 'react';
import './Pokemon.css'
import Navbar from "../../common/navbar/Navbar";
import {useParams} from "react-router-dom";
import Container from "../../common/container/Container";
import PokemonDetails from "./pokemon_details/PokemonDetails";
import {useGetPokemon, useWindowSize} from "../../../hooks";
import ImageCard from "./image_card/ImageCard";

const Pokemon = () => {

    const {id} = useParams();
    const {data, isLoading} = useGetPokemon(+id!);
    const size = useWindowSize();

    return (
        <div>
            <Navbar/>
            {
                size.width > 773 ?
                    <Container size={{width: '70%', height: '70vh'}}>
                        {
                            isLoading ?
                                <div className="poke-spinner"/>
                                :
                                <>
                                    <ImageCard data={data}/>
                                    <PokemonDetails data={data}/>
                                </>
                        }
                    </Container>
                    :
                    <Container size={{width: '95%'}}>
                        {
                            isLoading ?
                                <div className="poke-spinner"/>
                                :
                                <div style={{display:'flex', flexDirection: 'column', width: '100%'}}>
                                    <ImageCard data={data}/>
                                    <PokemonDetails data={data}/>
                                </div>
                        }
                    </Container>
            }
        </div>
    );
};

export default Pokemon;