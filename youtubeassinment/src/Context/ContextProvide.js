import React,{useState} from "react";
import DataContext from "./DataContext";

export default function ContextProvider({children}){


let[clicked,setClicked] =useState(1)

return(
    <DataContext.Provider value={{clicked,setClicked}}>
        {children}
    </DataContext.Provider>
)

}