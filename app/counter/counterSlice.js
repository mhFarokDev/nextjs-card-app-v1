import { createSlice } from "@reduxjs/toolkit";

// create slice
const counterSlice = createSlice({
    name : "counter",
    initialState : {
        count : 0
    },
    reducers : {},
    
});



// export selectors
// export actions
export const {} = counterSlice.actions;
// export reducer
export default counterSlice.reducer;