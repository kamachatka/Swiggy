import { createContext } from "react"

const UserContext = createContext({
    user:{
    name: "Amitesh",
    email: "amitesh02150@gmail.com",
    },
});

export default UserContext;