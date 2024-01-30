import { createSelector } from "@reduxjs/toolkit"

const productsSelector = (state) => state?.products?.data
const filtersSelector = (state) => state?.filters

export const filteredProductsSelector = createSelector(
    productsSelector,
    filtersSelector,
    (products, filters) => {
        const { searchText } = filters
        let filteredProducts = [...products]
        if(searchText){
            filteredProducts = filteredProducts.filter((p) => p.title.toLowerCase().includes(searchText.toLowerCase()))
        }
        return filteredProducts
    }
)