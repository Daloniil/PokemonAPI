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

    let opencard
    if (values == "noselect") {
        opencard = pokemonData.map((pokemon, i) => {
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
        )
    } else {
        opencard = pokemonData.map((pokemon, i) => {
                let openselect
                let checkpokemon = <div className={s.Card} onClick={
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
                if (pokemon.types.length > 1) {
                    if (pokemon.types[0].type.name == values || pokemon.types[1].type.name == values) {
                        openselect = checkpokemon
                    } else {
                    }
                } else {
                    if (pokemon.types[0].type.name == values) {
                        openselect = checkpokemon
                    } else {
                    }
                }


                return (
                    <div>
                        {openselect}
                    </div>
                )

            }
        )

    }
    return (

        <div className={s.content}>
            <div className={s.container}>
                {opencard}
                <div className={s.btn}>
                    <button onClick={LoadMore}>Load More</button>
                </div>
            </div>
            {seenMode === 1 ? <OneCardPokemon/> : ""}

        </div>
    )
}

