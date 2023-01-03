
import React, { createContext, useReducer } from 'react'
export default (reducer, actions, initialState) => {
    const Context = createContext();

    // actions === { addBlogPost: (dispatch) => { return () => {} } }
    const boundActions = {};
    for (let key in actions) {
        boundActions[key] = actions[key](dispatch);
    }

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);
        return <Context.Provider value={{ state, ...boundActions }}>{children}</Context.Provider>
    };

    return { Context, Provider }
}