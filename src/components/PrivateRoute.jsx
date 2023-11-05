import { Navigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
const PrivateRoute = ({children}) => {
const {user , isLoading} = useContext(AuthContext);

if(isLoading){
    return <span className="loading loading-ring loading-lg flex justify-center items-center "> </span>
}

if(!user){
    return <Navigate to={'/login'}></Navigate>
}
 return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;