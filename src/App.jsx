import React, {useState, useEffect} from 'react';
import {getPokemon, getAllPokemon} from './API/ApiPokemon';
import {Card} from './Components/Card/Card';
import {useForm} from "react-hook-form";

const initialURL = 'https://pokeapi.co/api/v2/pokemon?limit=12'


export const App = () => {
    const [pokemonData, setPokemonData] = useState([])
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            let response: any = await getAllPokemon(initialURL)
            setNextUrl(response.next);
            setPrevUrl(response.previous);
            await loadPokemon(response.results);
            setLoading(false);
        }

        fetchData();
    }, [])

    const LoadMore: any = async () => {
        setLoading(true);
        let data: any = await getAllPokemon(nextUrl);
        await loadPokemon(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        setLoading(false);
    }

    const loadPokemon = async (data: any) => {
        // @ts-ignore
        let _pokemonData = await Promise.all(data.map(async pokemon => {
            let pokemonRecord = await getPokemon(pokemon)
            return pokemonRecord
        }))
        // @ts-ignore
        setPokemonData(pokemonData => ([...pokemonData, ..._pokemonData]));
    }
    const [values, setValues] = useState("noselect")

    const {register, handleSubmit} = useForm();
    // @ts-ignore
    const onSubmit = data => setValues(data.selectPokemon);


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <select {...register("selectPokemon")}>
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
                <input type="submit"/>
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

