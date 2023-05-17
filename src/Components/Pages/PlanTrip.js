import Header from "../Header/Header";
import  "./PlanTrip.css";
const PlanTrip =()=>{
    return (
        <div>
        
        <div className="plantrip-bg">
        <Header/>
            <div className="plntrip-box">
                <div className="box-element">
                    <div className="box-input">
                        <h3 className="txt-white"> Plan Trip </h3>
                        <label>
                            <input type="text"  name="Name" placeholder="Name" />
                        </label>
                    </div>
                    <div className="box-input">
                        <label>
                                <input type="email"  name="email" placeholder="Email ID" />
                        </label>
                    </div>
                    <div className="box-input">
                        <label>
                            <input type="text" placeholder="Trip Name" />
                        </label>
                    </div>
                    <div className="box-input">
                        <label>
                            <input type="text" placeholder="Destination" />
                        </label>
                    </div>
                    <div className="box-input">
                        <label>
                            <input type="text" placeholder="Number of People" />
                        </label>
                    </div>
                    <div className="box-input">
                        <label>
                            <input type="text" placeholder="Date" />
                        </label>
                    </div>
                    <div className="box-input">
                        <label>
                            <input type="number" placeholder="Contact Number" />
                        </label>
                    </div>
                    <div className="box-input">
                        <label>
                            <input type="number" placeholder="Contact Number" />
                        </label>
                    </div>
                    <div className="box-input">
                        <label>
                            <input type="number" placeholder="Contact Number" />
                        </label>
                    </div>
                    <div className="box-input">
                        <label>
                            <input type="number" placeholder="Contact Number" />
                        </label>
                    </div>
                    <div>
                        <button className="login-button">Submit</button>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="bg2">
        </div> */}
        </div>
    )
}

export default PlanTrip;