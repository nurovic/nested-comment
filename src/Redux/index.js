import { configureStore } from "@reduxjs/toolkit";
import post from './PostSlice'

const rootReducer = configureStore({
    reducer: {
        post
    }
})

export default rootReducer