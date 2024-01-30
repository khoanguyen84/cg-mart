import React, { useEffect, useState } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from 'react-redux';
import productsSlice, { fetchDataThunkAction } from "../../slices/productsSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import { filteredProductsSelector } from "../../redux-toolkit/selectors";

var limit = 8
function Products() {
    const filteredProducts = useSelector(filteredProductsSelector)
    const totalRows = useSelector((state) => state?.products?.totalRows)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchDataThunkAction(limit))
    }, [dispatch])

    const loadMore = () => {
        if (limit < totalRows) {
            limit += 8;
            dispatch(fetchDataThunkAction(limit))
        }
    }
    return (
        <div className="py-2 d-flex flex-column justify-content-center">
            <h5>Products</h5>
            <InfiniteScroll
                dataLength={filteredProducts.length}
                hasMore={limit < totalRows}
                loader={<p>Loading...</p>}
                next={loadMore}
                style={{overflow: 'hidden'}}
                endMessage= {<p>You have seem it all!</p>}
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