import React, { useEffect, useState } from "react";
import Product from "./Product";

function Products(){
    const [productList, setProductList] = useState([])
    useEffect(() => {
        async function getProductList(){
            let res = await fetch('https://dummyjson.com/products?limit=100&skip=0')
            let data = await res.json()
            setProductList(data?.products)
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