import { fetchAllUser } from "./userAPI";

const { createSlice } = require("@reduxjs/toolkit");


const userSlice = createSlice({
    name : "user",
    initialState : {
        users : []
    },
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(fetchAllUser.fulfilled, (state, action)=>{
            state.users = action.payload
        })
    }

})

// export selectors
export const selectUsers = (state) => state.user
// export actions
export const {} = userSlice.actions;
// export reducer
export default userSlice.reducer;