import { createNewUser, getAllUserData } from "@/libs/GetAllusers"

const { createAsyncThunk } = require("@reduxjs/toolkit")

// fetch user from API
export const fetchAllUser = createAsyncThunk("user/fetchuser", async()=>{
    const users = await getAllUserData()
    return users;
})


// post/add new user
export const createUser = createAsyncThunk("user/createuser", async(data)=>{
    const users = await createNewUser(data)
    if (users) {
        alert("done")
    }
    return users;
})