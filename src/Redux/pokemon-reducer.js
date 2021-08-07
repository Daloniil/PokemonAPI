import {actionsType} from "./redux-store";

let initialState = {
    pokemons: [] as Array<any>
};

export type initialStateType = typeof initialState


export const pokemoReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case 'SEEPOKEMON': {
            let addstats = {
                stats: action.stats
            }
            return {
                ...state,
                // @ts-ignore
                pokemons: addstats,
            }
        }

        default:
            return state;
    }
}

type ActionsTypes = actionsType<typeof actions>


export const actions = {
    Add: (stats: any) => {
        return {
            type: "SEEPOKEMON",
            stats
        } as const
    }

}