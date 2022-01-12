import {combineReducers} from 'redux'
import cartReducer from './cart-reducer'

let reducers = combineReducers({
    cart : cartReducer,
})

const rootReducer = (state , action) => {
    return reducers(state , action);
}

export default rootReducer;