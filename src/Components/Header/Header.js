import "./Header.css"
import logo from '../../media/white-nobg.png';
import {Link} from 'react-router-dom';
const Header = () =>{
    return(
        <div className="header">

                <div className="items">
                    <img className="logo-sz" src={logo} alt ="logo"/>
                </div>
                <Link to="/" className="items">Login</Link>
                <Link to="/home" className="items">Home</Link>
                <Link to="/plantrip" className="items">PlanTrip</Link>
                <Link to="/choosetrip" className="items">ChooseTrip</Link>
                <Link to="/profile" className="items">Profile</Link>
        </div>
    );
}

export default Header;