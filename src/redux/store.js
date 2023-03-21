import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux"
import userReducer from "./userRedux"


// This is store , here we should store all our data
export default configureStore({
    // inside the reducer write all the reducers that we are using
    reducer : {
        cart : cartReducer ,
        user : userReducer
    }
})