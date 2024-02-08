import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Context = createContext();
export default Context;

export const GlobalContext = ({ children }) => {
    const [categories, setCategories] = useState([])
    const [currentCategory, setCurrentCategory] = useState("All")
    const navigate = useNavigate();

    async function getCategories() {
        const response = await fetch("http://localhost:5000/api/products");
        if (response.ok) {
            const data = await response.json()
            const { product } = data;
            const cat = Array.from(new Set(product.map(p => p.category)));
            setCategories(["All", ...cat])
        }
        else {
            console.log(response.status)
            console.log(response.json())
        }
    }

    const contextData = {
        getCategories: getCategories,
        categories: categories,
        navigate: navigate,
        currentCategory: currentCategory,
        setCurrentCategory: setCurrentCategory
    }

    return (
        <Context.Provider value={contextData}>{children}</Context.Provider>
    )
}