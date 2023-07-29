import { createContext, useEffect, useReducer } from "react";
import { categoriesReducer, initialCategoriesState } from "../reducers/categoriesReducer";
import { categories } from "../db/categoriesData";

export const CategoriesContext = createContext()

export function CategoriesProvider ({children}) {

    const [categoriesState, categoriesDispatch] = useReducer(categoriesReducer, initialCategoriesState)

    function getCategories () {
        categoriesDispatch({type: "SET_CATEGORIES", payload: categories})
    }

    useEffect(() => {getCategories()},[])

    function setCategorySelected (id) {
        const selectedCategory = categoriesState.categories?.find(({_id}) => _id === id)
        categoriesDispatch({type: "SET_SELECTED_CATEGORY", payload: selectedCategory})
    }

    return(
        <CategoriesContext.Provider value={{categoriesState, categoriesDispatch, setCategorySelected}}>
            {children}
        </CategoriesContext.Provider>
    )
}