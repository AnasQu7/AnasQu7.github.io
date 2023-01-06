import { useEffect } from "react";
import { createContext, useState } from "react";


export const ThemeContext = createContext()



export default function ThemeContextProvider({children}){
    const [Theme , SetTheme] = useState(false)
    const toggleTheme = ()=>{
         SetTheme(!Theme)
    }
    useEffect(()=>{
        if (window.matchMedia) {
            // Check if the dark-mode Media-Query matches
            if(window.matchMedia('(prefers-color-scheme: dark)').matches){
                SetTheme(true)
                //dar
            } else {
                      SetTheme(false)
                    // Light
                  }
          } 
       
    },[])
    return (
        <ThemeContext.Provider value={{toggleTheme , Theme}}>
            {children}
        </ThemeContext.Provider>
    )
}