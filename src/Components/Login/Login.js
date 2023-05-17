import { useState } from "react";

import LoginCard from "../Cards/LoginCard";
import SignUpCard from "../Cards/SignUpCard";
import Header from "../Header/Header";
import "./Login.css";

const Login = () => {

    const [isLogin, setLogin] = useState(0);

    const toggleLogin = (val) =>{
        setLogin(val);
    }
    const toggleSignup =(val) =>{
        setLogin(val);
    }

    return (
        <div className="bg">
            <Header/>
            {/* <div className="name">
                <h2 className="">Welcome to tripSathi</h2>
            </div> */}
            
            {isLogin ? (
                <LoginCard login={toggleLogin}/>
            ):(
                <SignUpCard signup={toggleSignup}/>
                )
            }
            
        </div>
    )
}

export default Login;