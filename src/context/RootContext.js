import React, {useState} from 'react';
import { LanguageContext} from "./index";

const RootContext = ({children}) => {
    const [language, setLanguage] = useState("en-US")
    const [background, setBackground] = useState("")
    return (
            <LanguageContext.Provider value={{
                language,
                setLanguage,
                background,
                setBackground
            }}>
                {children}
            </LanguageContext.Provider>
    );
};

export default RootContext;