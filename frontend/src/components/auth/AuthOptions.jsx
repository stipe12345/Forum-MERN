import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from "../../context/userContext";

function AuthOptions () {
    const { userData, setUserData } = useContext(UserContext);
    const history = useHistory();

    const register = () => history.push("/register");
    const login = () => history.push("/login");
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        })
        localStorage.setItem("auth-token","");
    };

    return (
        <nav className="auth-options">
            {userData.user ? (
                <button className="button2" onClick={logout}>Odjavite se</button>
            ) : (
                <>
                <button className="button2" onClick={register}>Registriraj se</button>
                <button className="button2" onClick={login}>Prijavi se</button>
                </>
            )}
        </nav>
    )
}

export default AuthOptions;