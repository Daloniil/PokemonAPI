let initialState = {
    pokemons: []

};


export const pokemoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEEPOKEMON': {
            let addstats = {
                stats: action.stats
            }
            return {
                ...state,
                pokemons: addstats,
            }
        }

        default:
            return state;
    }
}


export const Add = (stats) => {
    return {
        type: "SEEPOKEMON",
        stats
    }
}

