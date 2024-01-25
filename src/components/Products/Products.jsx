import React, { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../reducers/actions";

function Products(){
    const dispatch = useDispatch()
    const productList = useSelector((state) => state.products)
    const { searchText } = useSelector((state) => state.filters) 
    console.log(searchText);
    useEffect(() => {
        async function getProductList(){
            let res = await fetch('https://dummyjson.com/products?limit=100&skip=0')
            let data = await res.json()
            dispatch(fetchData(data?.products))
        }
        getProductList()
    }, [])
    return (
        <div className="py-2 d-flex flex-column justify-content-center">
            <h5>Products</h5>
            <div className="row">
                {
                    productList?.map((product) => (
                        <Product product={product}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Products;