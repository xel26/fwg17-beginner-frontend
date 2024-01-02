import { useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const [token, setToken] = useState(window.localStorage.getItem('token'))
    if(token){
        return(
            <>{children}</>
        )
    }else{
        return(
            <Navigate to={'/'}/>
        )
    }
}

export default PrivateRoute