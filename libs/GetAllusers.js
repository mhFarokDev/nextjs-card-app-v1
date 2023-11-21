import axios from "axios";

// get all users
export const getAllUserData = async () =>{
    // axios
    const response = await axios.get("https://nextjs-card-app-v1-rhx8awfnq-faruks-projects-36caa9d9.vercel.app/api/users")
    if (!response.data) throw new Error("User data not found!")
    return response.data;
}


export const createNewUser = async (data) =>{
    const response = await axios.post("https://nextjs-card-app-v1-rhx8awfnq-faruks-projects-36caa9d9.vercel.app/api/users", data)
    if (!response.data) {
        throw new Error("userdata not created!")
    }
    return response.data;
}