import { configureStore } from "@reduxjs/toolkit";
import counter from "@/app/counter/counterSlice"

// create store
const store = configureStore({
    reducer : {counter},
    devTools : true
})



// export store
export default store