const initState = []

export default function productSlice(state = initState, action){
    switch (action.type) {
        case 'products/fetchData': {
            return [
                ...action.payload
            ]
        }
        default: {
            return state
        }
    }
}