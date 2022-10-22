import { createContext, useState } from "react";


export const ThemeContext = createContext()



export default function ThemeContextProvider({children}){
    const [Theme , SetTheme] = useState(true)
    const toggleTheme = ()=>{
         SetTheme(!Theme)
    }
    return (
        <ThemeContext.Provider value={{toggleTheme , Theme}}>
            {children}
        </ThemeContext.Provider>
    )
}