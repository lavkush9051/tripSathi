import { Link } from 'react-router-dom';
import  "./LoginCard.css";

const SignUpCard = (props) =>{

    const signupHandler =() =>{
        props.signup(1);
    }

    return(
        <div className="box">
            <div className="box-element">
                <div className="box-input">
                    <h3 className="txt-white"> Sign up </h3>
                    <label>
                        <input type="email"  name="email" placeholder="Email ID" />
                    </label>
                </div>
                <div className="box-input">
                    <label>
                        <input type="text" placeholder="Phone Number" />
                    </label>
                </div>
                <div className="box-input">
                    <label>
                        <input type="text" placeholder="Password" />
                    </label>
                </div>
                <div className="box-input">
                    <label>
                        <input type="text" placeholder="Confirm Password" />
                    </label>
                </div>
                <div>
                    <button className="login-button">Continue</button>
                </div>
                <Link onClick={signupHandler} to='' className="txt-white">Already have an account, Login </Link>
            </div>
        </div>
    )
}

export default SignUpCard;