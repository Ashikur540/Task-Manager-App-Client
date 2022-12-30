import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../../Contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();
    if (loader) {
        return <div>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-live="polite" aria-busy="true" aria-labelledby="title-05b desc-05b" class="w-6 h-6 animate animate-spin mx-auto ">
                <title id="title-05b">Icon title</title>
                <desc id="desc-05b">Some desc</desc>
                <circle cx="12" cy="12" r="10" class="stroke-slate-200" stroke-width="4" />
                <path d="M12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2" class="stroke-cyan-700 " stroke-width="4" />
            </svg>
        </div>


    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};


export default PrivateRoute;