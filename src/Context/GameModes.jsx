import { createContext, useContext, useState } from "react";


const GameModeContext = createContext();

export const GameModeContextProvider = ({children})=>{
    
    const [gameTime, setGameTime] = useState(15);
    const [gameWords, setGameWords] = useState(10);
    const [gameMode, setGameMode] = useState();



    const values = {
        gameTime,
        setGameTime,
        gameWords,
        setGameWords,
        gameMode,
        setGameMode
    }

    return (
    <GameModeContext.Provider value = {values}>
        {children}
        </GameModeContext.Provider>
    );

}

export const useGameMode = () => useContext(GameModeContext);