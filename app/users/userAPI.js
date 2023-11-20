import { getAllUserData } from "@/libs/GetAllusers"

const { createAsyncThunk } = require("@reduxjs/toolkit")

export const fetchAllUser = createAsyncThunk("user/fetchuser", async()=>{
    const users = await getAllUserData()
    return users;
})