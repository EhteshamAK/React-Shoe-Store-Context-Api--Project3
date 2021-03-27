import {useReducer,createContext,useContext} from 'react';

export const StateContext = createContext();

// build a provider 
export const StateProvider =({reducer,initialState,children}) =>(
    <StateContext.Provider value={useReducer(reducer,initialState,)}>
        {children}
    </StateContext.Provider>
)

// this is how we used it inside of componet 

export const useStateValue = () => useContext(StateContext)
