import React, { useContext, useEffect } from "react";
import Product from "./Product";
import { ShoppingContext } from "../../context/shopping-context";
import { fetchData } from "../../reducer/actions";

function Products() {
    const { state, dispatch } = useContext(ShoppingContext)
    const { products, filters: { searchText, status, brand, category, price } } = state
    useEffect(() => {
        async function getProductList() {
            let res = await fetch('https://dummyjson.com/products?limit=100&skip=0')
            let data = await res.json()
            dispatch(fetchData(data?.products))
        }
        getProductList()
    }, [])

    const queryProducts = () => {
        let filteredProducts = [...products]
        if (searchText) {
            filteredProducts = filteredProducts.filter((p) =>
                p?.title.toLowerCase().includes(searchText.toLowerCase()))
        }
        if (status.length) {
            if (status.includes('On sale')) {
                filteredProducts = filteredProducts.filter((p) => p?.discountPercentage > 0)
            }
            if (status.includes('In stock')) {
                filteredProducts = filteredProducts.filter((p) => p?.stock > 0)
            }
        }
        if (brand !== 'All') {
            filteredProducts = filteredProducts.filter((p) => p?.brand.toLowerCase() === brand.toLowerCase())
        }
        if (category !== 'All') {
            filteredProducts = filteredProducts.filter((p) => p?.category.toLowerCase() === category.toLowerCase())
        }
        if (price !== '0,0') {
            const [min, max] = price.split(',')
            if(min !== max) {
                filteredProducts = filteredProducts.filter((p) => {
                    let priceAfterDiscount = Math.round(p.price * (1 - p.discountPercentage* 0.01))
                    return priceAfterDiscount >= min && priceAfterDiscount < max
                })
            }
            else {
                filteredProducts = filteredProducts.filter((p) => Math.round(p.price * (1 - p.discountPercentage* 0.01)) >= min)
            }
        }

        return filteredProducts
    }

    const filteredProducts = queryProducts()
    console.log(state.filters.price);
    return (
        <div className="py-2 d-flex flex-column justify-content-center">
            <h5>Products</h5>
            <div className="row">
                {
                    filteredProducts?.map((product) => (
                        <Product key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default Products;