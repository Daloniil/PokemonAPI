import React, {useState} from 'react';
import typeColors from '../../helpers/typeColors'
import s from './StyleCard/Card.module.css'
import {useDispatch} from "react-redux";
import {Add} from "../../Redux/pokemon-reducer";
import {OneCardPokemon} from "../OneCardPokemon/OneCardPokemon";


export const Card = ({pokemonData, LoadMore, values}) => {

    let SeenPok

    const dispatch = useDispatch()

    const seen = (pokemon) => {
        dispatch(Add(pokemon))
        setSeenMode(1)
    }

    const [seenMode, setSeenMode] = useState(0)

    return (
        <div className={s.content}>
            <div className={s.container}>
                {pokemonData.map((pokemon, i) => {
                        return (
                            <div className={s.Card} onClick={
                                SeenPok = () => {
                                    seen(pokemon)
                                }
                            }>
                                <div className={s.Card__img}>
                                    <img src={pokemon.sprites.front_default} alt="" width="100px" height="100px"/>
                                </div>
                                <div className={s.Card__name}>
                                    {pokemon.name}
                                </div>
                                <div className={s.Card__types}>
                                    {
                                        pokemon.types.map(type => {
                                            return (
                                                <div className={s.Card__type}
                                                     style={{backgroundColor: typeColors[type.type.name]}}>
                                                    {type.type.name}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                            ;
                    }
                )}
                <div className={s.btn}>
                    {values == "noselect" ? <button onClick={LoadMore}>Load More</button> : ""}

                </div>
            </div>
            {seenMode === 1 ? <OneCardPokemon/> : ""}

        </div>
    )
}

