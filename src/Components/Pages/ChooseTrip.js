import "./ChooseTripBtn.css";
//import { useState } from "react";
//import PlanTrip from "./PlanTrip";
//import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";

const ChooseTripBtn = () =>{

    //const [isClicked, setClicked] = useState(0);
    const navigate = useNavigate();

    // const handlePlanTrip =() =>{
    //     setClicked(!isClicked);
    // }



    return(  
        <div className="bdy"> 
            {/* {isClicked ? (
                <Navigate to = "/Plantrip" replace ={true} />
            ): ( */}
            <Header/>
            <div className="centre">
                <div>
                    <button className="btn" onClick={()=> navigate("/home")}>Join Trip</button>
                </div>
                <div>
                    <button className="btn" onClick={()=> navigate("/planTrip")}>Plan Trip</button>
                </div>
            </div>
            {/* )} */}
        </div>
 
    )
}

export default ChooseTripBtn;