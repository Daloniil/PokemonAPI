import React from "react";
import {useSelector} from "react-redux";
import {takepokemon} from "../../add-pokemon-selector";

export const OneCardPokemon = () => {
    const pokemon = useSelector(takepokemon)
    console.log(pokemon)
    return (
        <div>
            <div className="Card__data Card__data--ability">
                <div className="Card__img">
                    <img src={pokemon[0].stats.sprites.front_default} alt=""/>
                </div>
                {pokemon[0].stats.types.map(type => {
                    return (
                        <div>
                            Type
                            {type.type.name}
                        </div>
                    )
                })}

                <div className="Card__name">
                    {pokemon[0].stats.name}
                </div>
                <p className="title">Attack</p>
                <p>{pokemon[0].stats.stats[1].base_stat}</p>
                <p className="title">Defence</p>
                <p>{pokemon[0].stats.stats[2].base_stat}</p>
                <p className="title">Hp</p>
                <p>{pokemon[0].stats.stats[0].base_stat}</p>
                <p className="title">SP Attack</p>
                <p>{pokemon[0].stats.stats[3].base_stat}</p>
                <p className="title">SP Defence</p>
                <p>{pokemon[0].stats.stats[4].base_stat}</p>
                <p className="title">Speed</p>
                <p>{pokemon[0].stats.stats[5].base_stat}</p>
                <p className="title">weight</p>
                <p>{pokemon[0].stats.weight}</p>
                <p className="title">Total moves</p>
                <p>{pokemon[0].stats.moves.length}</p>

            </div>
        </div>
    )
}
