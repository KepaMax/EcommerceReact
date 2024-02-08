import { createContext } from "react";
import { useCookies } from 'react-cookie';

const Context = createContext();
export default Context;

export const GlobalContext = ({ children }) => {
    const [cookies, setCookie] = useCookies(['accessToken']);

    const contextData = {
        cookies: cookies,
        setCookie: setCookie
    }

    return (
        <Context.Provider value={contextData}>{children}</Context.Provider>
    )
}