import React, { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../reducers/actions";
import { productsSelector, filterSelector, filteredProductsSelector } from "../../redux/selectors";

function Products(){
    const dispatch = useDispatch()
    // const productList = useSelector(productsSelector)
    // const { searchText } = useSelector(filterSelector)
    useEffect(() => {
        async function getProductList(){
            let res = await fetch('https://dummyjson.com/products?limit=100&skip=0')
            let data = await res.json()
            dispatch(fetchData(data?.products))
        }
        getProductList()
    }, [])

    // const queryProducts = () => {
    //     let filteredProducts = [...productList]
    //     if(searchText) {
    //         filteredProducts = filteredProducts.filter(p => p.title.toLowerCase().includes(searchText.toLowerCase()))
    //     }
    //     return filteredProducts
    // }

    // const filteredProducts = queryProducts()

    const filteredProducts = useSelector(filteredProductsSelector)
    return (
        <div className="py-2 d-flex flex-column justify-content-center">
            <h5>Products</h5>
            <div className="row">
                {
                    filteredProducts?.map((product) => (
                        <Product key={product.id} product={product}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Products;