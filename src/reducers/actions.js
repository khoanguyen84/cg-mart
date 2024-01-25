export const fetchData = (payload) => {
    return {
        type: 'products/fetchData',
        payload
    }
}

export const setSearchText = (payload) => {
    return {
        type: 'filters/searchText',
        payload
    }
}