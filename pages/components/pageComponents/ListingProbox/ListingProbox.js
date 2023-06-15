//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
//         ON THE COMPONENT THAT DISPLAYS THE HOMEPAGE THIS COMPONENT DISPLAY ALL DESTINATION       //
//                    IMAGES, ALONG WITH DESCRIPTIONS, BOOKING AMOUNTS, AND MORE.                   //                                                           
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////


import React,{useEffect, useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import Image from "next/image";
// This component is designed for reusing buttons
import Departure from "../Departure/Departure"
import Stay from "../Stay/Stay";
import Night from "../Night/Night";
import Activities from "../Activities/Activities";
import Activity from "../Activity/Activity";
import Styles from "./ListingProbox.module.scss";


// FUNCTION FOR DATA LISTING COMPONENT
const ListingProbox = (props) => {
  const imageLoader = ({ src, width, quality }) => {
    return `${src}`;
  };

  return (
    <>
        <div className={Styles.list_probox} id="1" key="1">
          <h4>Your day to day Itinerary</h4>
           <div className={Styles.dest_and_time}>
                <span>Destination:</span> Paris, Rome <br></br>
                <span>Date:</span> 13/062023 to 17/06/2023
           </div>
        </div>
        <Departure />
        <Stay />
        <Night />
        <Activity />
        <Activities/>
       
    </>
  );
};
ListingProbox.defaultProps = {
  boxData: []
}
export default ListingProbox;


