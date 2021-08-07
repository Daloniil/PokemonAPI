import React, {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {takepokemon} from "../../add-pokemon-selector";
import s from "./StyleOneCardPokemon/OneCardPokemon.module.css"

export const OneCardPokemon = () => {
    const pokemon = useSelector(takepokemon)

    const pokemonRef = useRef(pokemon)

    useEffect(() => {
        pokemonRef.current = pokemon
        setSeenPokemons(pokemonRef.current.stats)
    }, [pokemon])

    const [seenPokemons, setSeenPokemons] = useState(pokemonRef.current.stats)

    return (
        <div className={s.one_crad_container}>
            <div className={s.Card_data}>
                <div className={s.Card_img}>
                    <img src={seenPokemons.sprites.front_default} alt="" width="200px" height="200px"/>
                </div>
                <div className={s.Card_name}>
                    <span>{seenPokemons.name}</span>
                </div>


                <div className={s.all_stats}>
                    <div className={s.Data_type}>
                        <span className={s.name_type}>Type</span>
                        <div className={s.all_types}>
                            {seenPokemons.types.map(type => {
                                return (
                                    <span className={s.type}>
                                        {type.type.name}
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                    <div className={s.stats_attac}>
                        <div className={s.container_tittle}>
                            <p className={s.title}>Attack</p>
                        </div>
                        <div className={s.container_attack}>
                            <p className={s.attack}>{seenPokemons.stats[1].base_stat}</p>
                        </div>
                    </div>

                    <div className={s.stats_defence}>
                        <div className={s.container_tittle}>
                            <p className={s.title}>Defence</p>
                        </div>
                        <div className={s.container_defence}>
                            <p>{seenPokemons.stats[2].base_stat}</p>
                        </div>
                    </div>

                    <div className={s.stats_defence}>
                        <div className={s.container_tittle}>
                            <p className={s.title}>Hp</p>
                        </div>
                        <div className={s.container_defence}>
                            <p>{seenPokemons.stats[0].base_stat}</p>
                        </div>
                    </div>

                    <div className={s.stats_defence}>
                        <div className={s.container_tittle}>
                            <p className={s.title}>SP Attack</p>
                        </div>
                        <div className={s.container_defence}>
                            <p>{seenPokemons.stats[3].base_stat}</p>
                        </div>
                    </div>


                    <div className={s.stats_defence}>
                        <div className={s.container_tittle}>
                            <p className={s.title}>SP Defence</p>
                        </div>
                        <div className={s.container_defence}>
                            <p>{seenPokemons.stats[4].base_stat}</p>
                        </div>
                    </div>

                    <div className={s.stats_defence}>
                        <div className={s.container_tittle}>
                            <p className={s.title}>Speed</p>
                        </div>
                        <div className={s.container_defence}>
                            <p>{seenPokemons.stats[5].base_stat}</p>
                        </div>
                    </div>

                    <div className={s.stats_defence}>
                        <div className={s.container_tittle}>
                            <p className={s.title}>Weight</p>
                        </div>
                        <div className={s.container_defence}>
                            <p>{seenPokemons.weight}</p>
                        </div>
                    </div>

                    <div className={s.stats_defence}>
                        <div className={s.container_tittle}>
                            <p className={s.title}>Total moves</p>
                        </div>
                        <div className={s.container_defence}>
                            <p>{seenPokemons.moves.length}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
