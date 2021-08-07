import React from 'react';
import typeColors from '../../helpers/typeColors'
import './style.css';
import {Link, Route, Switch} from "react-router-dom";
import {OneCardPokemon} from "../OneCardPokemon/OneCardPokemon";
import {useDispatch} from "react-redux";
import {actions} from "../../Redux/pokemon-reducer";


// @ts-ignore
export const Card = ({pokemon}) => {

    const dispatch = useDispatch
    const Adds = (info:any) => {
        dispatch(actions.Add(info))
    }

    const seePokemon = () => {
        Adds(pokemon.stats)


    }


    return (
        <div className="Card" onClick={seePokemon}>
            <Link to={"/pokemonstats"}>
                <div className="Card__img">
                    <img src={pokemon.sprites.front_default} alt=""/>
                </div>
                <div className="Card__name">
                    {pokemon.name}
                </div>
                <div className="Card__types">
                    {
                        pokemon.types.map(type => {
                            return (
                                <div className="Card__type" style={{backgroundColor: typeColors[type.type.name]}}>
                                    {type.type.name}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="Card__info">
                    <div className="Card__data Card__data--weight">
                        <p className="title">Weight</p>
                        <p>{pokemon.weight}</p>
                    </div>
                    <div className="Card__data Card__data--weight">
                        <p className="title">Height</p>
                        <p>{pokemon.height}</p>
                    </div>
                    <div className="Card__data Card__data--ability">
                        <p className="title">Ability</p>
                        <p>{pokemon.abilities[0].ability.name}</p>
                    </div>
                </div>
                <Switch>
                    <Route exact path="/pokemonstats">
                        <OneCardPokemon pokemon={pokemon.stat}/>
                    </Route>
                </Switch>
            </Link>
        </div>
    );
}

