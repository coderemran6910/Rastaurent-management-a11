import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
const PrivateRoute = ({children}) => {
const {user} = useContext(AuthContext);

if(!user){
    return <span className="loading loading-ring loading-lg flex justify-center items-center "> </span>
}
 return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;