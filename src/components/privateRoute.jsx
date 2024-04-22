import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import propTypes from "prop-types"

const PrivateRoute = ({children}) => {
    const token = useSelector(state => state.auth.token)

    if(token){
        return(
            <>{children}</>
        )
    }else{
        return (
            <Navigate to={'/'}/>
        )
    }
}


PrivateRoute.propTypes = {
    children: propTypes.element
}


export default PrivateRoute