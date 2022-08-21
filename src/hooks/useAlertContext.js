import { AppContext } from "../context/AppContext";
import  { useContext } from "react";

export const useAlertContext = ()=>{
    const context = useContext(AppContext)

    if (!context){
        throw Error('must be used inside alert')
    }

    return context
}