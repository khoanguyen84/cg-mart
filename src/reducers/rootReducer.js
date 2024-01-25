// const initState = {
import { combineReducers } from 'redux';
import productSlice from './productSlice';
import filtersSlice from './filtersSlice';
//     products: [],
//     filters: {
//         searchText: '',
//         status: [],
//         brand: 'All',
//         category: 'All',
//         price: '0,0'
//     }
// }
// export default function rootReducer(state = initState, action) {
//     switch (action.type) {
//         case 'products/fetchData': {
//             return {
//                 ...state,
//                 products: action.payload
//             }
//         }
//         default: {
//             return state
//         }
//     }
// }

const rootReducer = combineReducers({
    products: productSlice,
    filters: filtersSlice
})

export default rootReducer