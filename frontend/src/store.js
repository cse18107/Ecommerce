import {
  combineReducers,
  applyMiddleware,
  createStore,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsReducer,productDetailsReducer,newReviewReducer} from "./reducers/productReducer";
import { profileReducer, userReducer, forgotPasswordReducer  } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";

const reducer = combineReducers({
  products:productsReducer,
  productDetails:productDetailsReducer,
  user:userReducer,
  profile:profileReducer,
  forgotPassword:forgotPasswordReducer,
  cart:cartReducer,
  newReview: newReviewReducer,
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems")):[],
  }
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
