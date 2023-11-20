import axios from "axios";

// get all users
export const getAllUserData = async () =>{
    // axios
    const response = await axios.get("http://localhost:3000/api/users")
    if (!response.data) throw new Error("User data not found!")
    return response.data;
}