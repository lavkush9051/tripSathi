import { Link } from 'react-router-dom';
import "./LoginCard.css";
import Button from '@mui/material/Button';


const LoginCard = () =>{

    const loginHandler = (props) =>{
        props.login(0);
    }

    return(
        <div className="box">
            <div className="box-element">
                <div className="box-input">
                    <h3 className="txt-white"> Login </h3>
                    <label>
                        <input type="email"  name="email" placeholder="Enter Email ID" />
                    </label>
                </div>
                <div className="box-input">
                    <label>
                        <input type="text" placeholder="Enter Password"  />
                    </label>
                </div>

                <div >
                    <Button variant="contained" className="login-button">LOGIN</Button>
                </div>
                <div className="txt-white">
                    Forget Password
                </div>
                <Link onClick={loginHandler} to='' className="txt-white">Don't have an account, SignUp</Link>
            </div>
            
        </div>
    )
}

export default LoginCard;