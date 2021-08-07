import React, {useState, useEffect} from 'react';
import {getPokemon, getAllPokemon} from './API/ApiPokemon';
import {Card} from './Components/Card/Card';
import {useForm} from "react-hook-form";
import s from "./StyleApp/App.module.css"

const LoadPokemonURL = 'https://pokeapi.co/api/v2/pokemon?limit=12'


export const App = () => {
    const [pokemonData, setPokemonData] = useState([])
    const [nextUrl, setNextUrl] = useState('');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            let responsePokemon = await getAllPokemon(LoadPokemonURL)
            setNextUrl(responsePokemon.next);
            await loadPokemon(responsePokemon.results);
            setLoading(false);
        }

        fetchData();
    }, [])

    const LoadMore = async () => {
        setLoading(true);
        let data = await getAllPokemon(nextUrl);
        await loadPokemon(data.results);
        setNextUrl(data.next);
        setLoading(false);
    }

    const loadPokemon = async (dataPokemon) => {
        let _pokemonData = await Promise.all(dataPokemon.map(async pokemon => {
            let pokemonRecord = await getPokemon(pokemon)
            return pokemonRecord
        }))
        setPokemonData(pokemonData => ([...pokemonData, ..._pokemonData]));

    }
    const [values, setValues] = useState("noselect")

    const {register, handleSubmit} = useForm();
    const onSubmit = data => setValues(data.selectPokemon);


    return (
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
                    <option value="unknown">Unknown</option>
                    <option value="shadow">Shadow</option>
                </select>
                <button type="submit">Search</button>
            </form>
            <div>
                {loading ? <h1 style={{textAlign: 'center'}}>Loading...</h1> : (
                    <>
                        <div>
                            <Card pokemonData={pokemonData} LoadMore={LoadMore} values={values}/>
                        </div>
                    </>
                )}
            </div>

        </>
    );


}

