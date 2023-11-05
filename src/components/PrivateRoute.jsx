import { Navigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
const PrivateRoute = ({children}) => {
const {user , isLoading} = useContext(AuthContext);

if(isLoading){
    return <div className="flex justify-center items-center h-screen "><span className="loading loading-ring loading-lg w-50 "> </span></div>
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