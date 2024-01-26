import React, { useContext, useEffect, useState } from "react";
import Product from "./Product";
import { ShoppingContext } from "../../context/shopping-context";
import { fetchData } from "../../reducer/actions";
import InfiniteScroll from "react-infinite-scroll-component";

var limit = 8
var totalRows = 0
function Products() {
    const { state, dispatch } = useContext(ShoppingContext)
    const { products, filters: { searchText, status, brand, category, price } } = state
    const [hasMore, setHasMore] = useState(true)
    useEffect(() => {
        async function getProductList() {
            let res = await fetch('https://dummyjson.com/products?limit=8&skip=0')
            let data = await res.json()
            totalRows = data?.total
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
            if (min !== max) {
                filteredProducts = filteredProducts.filter((p) => {
                    let priceAfterDiscount = Math.round(p.price * (1 - p.discountPercentage * 0.01))
                    return priceAfterDiscount >= min && priceAfterDiscount < max
                })
            }
            else {
                filteredProducts = filteredProducts.filter((p) => Math.round(p.price * (1 - p.discountPercentage * 0.01)) >= min)
            }
        }

        return filteredProducts
    }

    const filteredProducts = queryProducts()

    const fetchMoreData = async () => {
        if(filteredProducts.length < totalRows){
            limit += 8
            let res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=0`)
            let data = await res.json()
            dispatch(fetchData(data?.products))
        }
        else {
            setHasMore(false)
        }
    }
    
    return (
        <div className="py-2 d-flex flex-column justify-content-center">
            <h5>Products</h5>
            <InfiniteScroll
                dataLength={filteredProducts.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader ={<p>Loading...</p>}
                endMessage = {<p>You have seen it all!</p>}
                style={{overflow: 'hidden'}}
                scrollThreshold={'100px'}
            >
                <div className="row">
                    {
                        filteredProducts?.map((product) => (
                            <Product key={product.id} product={product} />
                        ))
                    }
                </div>
            </InfiniteScroll>
        </div>
    )
}

export default Products;