const initState = {
    searchText: '',
    status: [],
    brand: 'All',
    category: 'All',
    price: '0,0'
}

export default function filtersSlice(state = initState, action) {
    switch (action.type) {
        case 'filters/searchText': {
            return {
                ...state,
                searchText: action.payload
            }
        }
        default: {
            return state
        }
    }
}