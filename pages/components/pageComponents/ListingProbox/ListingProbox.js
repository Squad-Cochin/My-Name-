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
import ButtonType from "../../elementComponents/Button/Button";
import Styles from "./ListingProbox.module.scss";

// FUNCTION FOR DATA LISTING COMPONENT
const ListingProbox = (props) => {
  const imageLoader = ({ src, width, quality }) => {
    return `${src}`;
  };

  return (
    <>
        <div className={Styles.list_probox} id="1" key="1">
          <h4><b>Your day to day Itinerary</b></h4>
          <p><b>Destination: </b>Paris, Rome</p>
          <p><b>Date: </b>13/06/2023 to 17/06/2023</p>
        </div>
    </>
  );
};
ListingProbox.defaultProps = {
  boxData: []
}
export default ListingProbox;


