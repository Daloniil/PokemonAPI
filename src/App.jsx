import React, {useState, useEffect} from 'react';
import {getPokemon, getAllPokemon} from './API/ApiPokemon';
import {Card} from './Components/Card/Card';
import {useForm} from "react-hook-form";
import s from "./StyleApp/App.module.css"


export const App = () => {
    const [pokemonData, setPokemonData] = useState([])
    const [nextUrl, setNextUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const [values, setValues] = useState("noselect")

    const LoadTypeURL = `https://pokeapi.co/api/v2/type/${values}` //There is no limit utility for this request. Therefore, I will not be able to create a withdrawal with a limit of 12
    const LoadPokemonURL = 'https://pokeapi.co/api/v2/pokemon?limit=12'

    useEffect(() => {
        async function fetchData() {
            if (values == "noselect") {
                setLoading(true);
                let responsePokemon = await getAllPokemon(LoadPokemonURL)
                setNextUrl(responsePokemon.next);
                setPokemonData([])
                await loadPokemon(responsePokemon.results);
                setLoading(false);
            } else {
                setLoading(true);
                let responsePokemon = await getAllPokemon(LoadTypeURL)
                setNextUrl(responsePokemon.next);
                setPokemonData([])
                await loadPokemon(responsePokemon.pokemon);
                setLoading(false);
            }

        }

        fetchData();
    }, [values])

    const LoadMore = async () => {
        setLoading(true);
        let data = await getAllPokemon(nextUrl);
        await loadPokemon(data.results);
        setNextUrl(data.next);
        setLoading(false);
    }

    const loadPokemon = async (dataPokemon) => {
        if (values == "noselect") {
            let _pokemonData = await Promise.all(dataPokemon.map(async pokemon => {
                let pokemonRecord = await getPokemon(pokemon)
                return pokemonRecord
            }))
            setPokemonData(pokemonData => ([...pokemonData, ..._pokemonData]));
        } else {
            let _pokemonData = await Promise.all(dataPokemon.map(async pokemon => {
                let pokemonRecord = await getPokemon(pokemon.pokemon)
                return pokemonRecord
            }))
            setPokemonData(pokemonData => ([...pokemonData, ..._pokemonData]));
        }


    }

    const {register, handleSubmit} = useForm();
    const onSubmit = data => setValues(data.selectPokemon);


    return (
        <div>
            {loading ? <h1 style={{textAlign: 'center'}}>Loading...</h1> : (
                <>
                    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
                        <select className={s.custom_select} {...register("selectPokemon")}>
                            <option value="noselect">No select</option>
                            <option value="normal">Normal</option>
                            <option value="fighting">Fighting</option>
                            <option value="flying">Flying</option>
                            <option value="poison">Poison</option>
                            <option value="ground">Ground</option>
                            <option value="rock">Rock</option>
                            <option value="bug">Bug</option>
                            <option value="ghost">Ghost</option>
                            <option value="steel">Steel</option>
                            <option value="fire">Fire</option>
                            <option value="water">Water</option>
                            <option value="grass">Grass</option>
                            <option value="electric">Electric</option>
                            <option value="psychic">Psychic</option>
                            <option value="ice">Ice</option>
                            <option value="dragon">Dragon</option>
                            <option value="dark">Dark</option>
                            <option value="fairy">Fairy</option>
                            <option value="shadow">Shadow</option>
                        </select>
                        <button type="submit">Search</button>
                    </form>
                    <div>
                        <Card pokemonData={pokemonData} LoadMore={LoadMore} values={values}/>
                    </div>
                </>
            )}
        </div>
    );


}

