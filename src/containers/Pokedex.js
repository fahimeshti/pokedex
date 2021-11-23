import React, { useEffect, useState } from 'react';
import { IMAGE_API_URL, POKEMON_API_URL } from '../config';
import axios from 'axios';
import PokemonCard from '../components/PokemonCard';

const Pokedex = () => {
    const [pokemonData, setPokemonData] = useState(null)

    useEffect(() => {
        axios.get(POKEMON_API_URL + "?limit=200").then((response) => {
            if (response.status >= 200 && response.status < 300) {
              const { results } = response.data;
              let newPokemonData = [];
              results.forEach((pokemon, index) => {
                index++;
                let pokemonObject = {
                  id: index,
                  url: IMAGE_API_URL + index + ".png",
                  name: pokemon.name,
                };
                newPokemonData.push(pokemonObject);                
              });
              setPokemonData(newPokemonData)
            }
          });
        
    },[])

const styles ={
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems:"center",
    justifyContent:"space-evenly",
    marginTop: "60px"
}

    return (
        <div style={styles}>
        {pokemonData ? pokemonData.map((pokemon)=>{
                return <PokemonCard key={pokemon.id} pokemon={pokemon} />
            }) : 'Empty!'}
        </div>
    );
};

export default Pokedex;