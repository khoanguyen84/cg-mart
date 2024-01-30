import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        status: 'idle',
        totalRows: 0,
        data: []
    },
    reducers: {
        // fetchData: (state, action) => {
        //     state = action.payload
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataThunkAction.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchDataThunkAction.fulfilled, (state, action) => {
                state.status= 'idle';
                state.data = action.payload?.products
                state.totalRows = action.payload?.total
            })
    },
    selectors: {
        products: (state) => state.data
    }
})

export const fetchDataThunkAction = createAsyncThunk('fetchDataThunkAction', async (limit) => {
    let res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=0`)
    let data = await res.json()
    return data
})

export default productsSlice;