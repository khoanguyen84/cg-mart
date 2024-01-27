import { createSelector } from "reselect"

export const productsSelector = (state) => state.products
export const filterSelector = (state) => state.filters

export const filteredProductsSelector = createSelector(
    productsSelector,
    filterSelector,
    (products, filters) => {
        console.log(filters);
        const { searchText } = filters
        let filteredProducts = [...products]
        if (searchText) {
            filteredProducts = filteredProducts.filter(p => p.title.toLowerCase().includes(searchText.toLowerCase()))
        }
        return filteredProducts
    }
)