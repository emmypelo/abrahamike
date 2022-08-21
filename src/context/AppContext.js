import React, { createContext, useReducer } from "react";
export const AppContext = createContext();
export const AlertReducer =(state, action)=>{
    switch (action.type) {
        case 'CREATE_ALERT':
            return {
                toast:action.payload
            }
           
           
        default:
            return state
    }
}


export const AppContextProvider = ({ children }) => {
    const [state, dispatch] =useReducer(AlertReducer,{
        alert:null
    })


  return(
  <AppContext.Provider value={{state, dispatch}}>
    {children }
 </AppContext.Provider>)
};
