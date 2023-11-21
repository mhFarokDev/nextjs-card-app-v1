import axios from "axios";

// get all users
export const getAllUserData = async () =>{
    // axios
    const response = await axios.get("api/users")
    if (!response.data) throw new Error("User data not found!")
    return response.data;
}


export const createNewUser = async (data) =>{
    const response = await axios.post("api/users", data)
    if (!response.data) {
        throw new Error("userdata not created!")
    }
    return response.data;
}