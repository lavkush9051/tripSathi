import React from "react";
import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import "./InfiniteScroll.css";
import { color } from "@mui/system";
import Header from "../Header/Header";



const style = {
    height: 210,
    border: "1px solid green",
    margin: 60,
    padding: 8
  };

  const trips = [
    {
      "TripName" : "LetsGoGoa",
      "Destination": "Goa",
      "Date": '2023-05-23',
      "No_of_people_required" : 10,
      "Budget": 10000
    },
    {
      "TripName" : "PondicherryTrip",
      "Destination": "Pondicherry",
      "Date": '2023-05-23',
      "No_of_people_required" : 11,
      "Budget": 6000
    },
    {
      "TripName" : "ManaliTrip",
      "Destination": "Manali",
      "Date": '2023-05-23',
      "No_of_people_required" : 15,
      "Budget": 8000
    },
    {
      "TripName" : "CoolShimla",
      "Destination": "Shimla",
      "Date": '2023-05-22',
      "No_of_people_required" : 20,
      "Budget": 13000
    },
    {
      "TripName" : "LetsGoLehLadakh",
      "Destination": "Leh & Ladakh",
      "Date": '2023-05-20',
      "No_of_people_required" : 20,
      "Budget": 30000
    },
    {
      "TripName" : "VisitHaridwar",
      "Destination": "Haridwar",
      "Date": '2023-05-22',
      "No_of_people_required" : 15,
      "Budget": 10000
    },
    {
      "TripName" : "R A J S T H A N",
      "Destination": "Jaipur, Jodhpur",
      "Date": '2023-05-15',
      "No_of_people_required" : 30,
      "Budget": 25000
    },
    {
      "TripName" : "M A H A A B A L E S H A W A R",
      "Destination": "Mahabaleshwar",
      "Date": '2023-05-18',
      "No_of_people_required" : 15,
      "Budget": 15000
    },
    {
      "TripName" : "TripToDarjelling",
      "Destination": "Darjelling",
      "Date": '2023-05-23',
      "No_of_people_required" : 15,
      "Budget": 12000
    },
    {
      "TripName" : "Badlapur Farmhouse",
      "Destination": "Badlapur",
      "Date": '2023-05-23',
      "No_of_people_required" : 12,
      "Budget": 2000
    },
    {
      "TripName" : "KUMBH MELA",
      "Destination": "Varanasi",
      "Date": '2023-05-20',
      "No_of_people_required" : 50,
      "Budget": 5000
    },
    {
      "TripName" : "KANYAKUMARI",
      "Destination": "Kanyakumari",
      "Date": '2023-05-10',
      "No_of_people_required" : 15,
      "Budget": 8000
    },
    {
      "TripName" : "LetsGoGoa",
      "Destination": "Goa",
      "Date": '2023-05-23',
      "No_of_people_required" : 10,
      "Budget": 10000
    },
    {
      "TripName" : "PondicherryTrip",
      "Destination": "Pondicherry",
      "Date": '2023-05-23',
      "No_of_people_required" : 11,
      "Budget": 6000
    },
    {
      "TripName" : "ManaliTrip",
      "Destination": "Manali",
      "Date": '2023-05-23',
      "No_of_people_required" : 15,
      "Budget": 8000
    },
    {
      "TripName" : "CoolShimla",
      "Destination": "Shimla",
      "Date": '2023-05-22',
      "No_of_people_required" : 20,
      "Budget": 13000
    },
    {
      "TripName" : "LetsGoLehLadakh",
      "Destination": "Leh & Ladakh",
      "Date": '2023-05-20',
      "No_of_people_required" : 20,
      "Budget": 30000
    },
    {
      "TripName" : "VisitHaridwar",
      "Destination": "Haridwar",
      "Date": '2023-05-22',
      "No_of_people_required" : 15,
      "Budget": 10000
    },
    {
      "TripName" : "R A J S T H A N",
      "Destination": "Jaipur, Jodhpur",
      "Date": '2023-05-15',
      "No_of_people_required" : 30,
      "Budget": 25000
    },
    {
      "TripName" : "M A H A A B A L E S H A W A R",
      "Destination": "Mahabaleshwar",
      "Date": '2023-05-18',
      "No_of_people_required" : 15,
      "Budget": 15000
    },
    {
      "TripName" : "TripToDarjelling",
      "Destination": "Darjelling",
      "Date": '2023-05-23',
      "No_of_people_required" : 15,
      "Budget": 12000
    },
    {
      "TripName" : "Badlapur Farmhouse",
      "Destination": "Badlapur",
      "Date": '2023-05-23',
      "No_of_people_required" : 12,
      "Budget": 2000
    },
    {
      "TripName" : "KUMBH MELA",
      "Destination": "Varanasi",
      "Date": '2023-05-20',
      "No_of_people_required" : 50,
      "Budget": 5000
    },
    {
      "TripName" : "KANYAKUMARI",
      "Destination": "Kanyakumari",
      "Date": '2023-05-10',
      "No_of_people_required" : 15,
      "Budget": 8000
    }
  ]
  
  //console.log(trips.length);
//   class Appp extends React.Component {
//     state = {
//       items: Array.from({ length: 20 })
//     };
  
//     fetchMoreData = () => {
//       // a fake async api call like which sends
//       // 20 more records in 1.5 secs
//       setTimeout(() => {
//         this.setState({
//           items: this.state.items.concat(Array.from({ length: 20 }))
//         });
//       }, 1500);
//     };
  
//     render() {
//       return (
//         <div>
//           <h1>demo: react-infinite-scroll-component</h1>
//           <hr />
//           <InfiniteScroll
//             dataLength={this.state.items.length}
//             next={this.fetchMoreData}
//             hasMore={true}
//             loader={<h4>Loading...</h4>}
//           >
//             {this.state.items.map((i, index) => (
//               <div style={style} key={index}>
//                 div - #{index}
//               </div>
//             ))}
//           </InfiniteScroll>
//         </div>
//       );
//     }
//   }

const InfiniteScrooll = () =>{
    const [items, setItems] = useState(Array.from({ length: 5 }));
    const [hasMoreItem, setHasMoreItem] = useState(true);

    const fetchMoreData =() =>{
      console.log(items.length)
      if(items.length >= 23){
        setHasMoreItem(false);
        return;
      }
        setTimeout(() => {
            //setItems(arr => [...items, `${items.length}`]);
            setItems(items.concat(Array.from({ length: 2 })));
        }, 500);

    };

    return(

        <div className="scrollpage-bg">
          <Header/>
          <h1 className="scrollpage-header">Join Your Travel Group</h1>
          <hr />
          
          <InfiniteScroll
            dataLength={trips.length}
            //next={fetchMoreData}
            hasMore={hasMoreItem}
            loader={<h4>Loading...</h4>}
            scrollThreshold="200px"
            onScroll={fetchMoreData}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You scrolled up all</b>
              </p>
            }
          >
            {items.map((i, index) => (
              <div style={style} key={index}>
                Post Number - #{index+1}
                <div>
                  <p>Trip Name: {trips[index].TripName}</p>
                  <p>Destination: {trips[index].Destination}</p>
                  <p>Date: {trips[index].Date}</p>
                  <p>No of People Required: {trips[index].No_of_people_required}</p>
                  <p>Budget: {trips[index].Budget}</p>
                  <button>Join</button>
                </div>
              </div>
            ))}
          </InfiniteScroll>
          <button onClick={fetchMoreData}> get more data</button>
        </div>
    )
} 
export default InfiniteScrooll;

