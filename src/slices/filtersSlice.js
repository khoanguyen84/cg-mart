import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        searchText: '',
        status: [],
        brand: "All",
        category: 'All',
        price: '0,0'
    },
    reducers: {
        setSearchText: (state, action) => {
            state.searchText = action.payload
        }
    }
})

export default filtersSlice