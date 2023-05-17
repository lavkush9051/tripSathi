import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
//"url(/img/camel_desert.jpg)"
import SignUpCard from "./Components/Cards/SignUpCard";
import ChooseTrip from "./Components/Pages/ChooseTrip";
import PlanTrip from "./Components/Pages/PlanTrip";
import LoginCard from "./Components/Cards/LoginCard";
//import Appp from "./Components/Pages/InfiniteScroll";
import InfiniteScrooll from "./Components/Pages/InfiniteScroll";

import UsersProfile from "./Components/UsersProfile/UsersProfile";

 function App() {
   return (
    <div>
      {/* <Login/> */}
      {/* <ChooseTrip/> */}
      {/* <PlanTrip/> */}
      <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Login/>} />
            {/* <Route path="signup" element={<SignUpCard/>} /> */}
            <Route path="choosetrip" element={<ChooseTrip/>}/>
            <Route path="plantrip" element={<PlanTrip/>} />
            <Route path="home" element={<InfiniteScrooll/>} />
            <Route path="profile" element={<UsersProfile/>} />
        </Routes>
      </BrowserRouter>

    </div>
    // <>
    //   <InfiniteScrooll/>
    // </>
   );
 }

 export default App