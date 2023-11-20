import { createSlice } from "@reduxjs/toolkit";

// create slice
const counterSlice = createSlice({
    name : "counter",
    initialState : {
        count : 0
    },
    reducers : {
        increement : (state, action) =>{
            state.count++;
        },
        decreement : (state, action) =>{
            state.count--;
        }
    },

});



// export selectors
export const selectCount = (state) => state.counter;
// export actions
export const {increement, decreement} = counterSlice.actions;
// export reducer
export default counterSlice.reducer;