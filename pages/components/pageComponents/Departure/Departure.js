import React,{useEffect, useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import Image from "next/image";
import { BiCalendar } from "react-icons/bi";
import { MdOutlineFlight } from "react-icons/md";
import { RiFlightTakeoffFill } from "react-icons/ri";
import { RiFlightLandLine } from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FcMinus } from "react-icons/fc";

// This component is designed for reusing buttons
import ButtonType from "../../elementComponents/Button/Button";
import Styles from "./Departure.module.scss";

// FUNCTION FOR DATA LISTING COMPONENT
const Departure = (props) => {
  const imageLoader = ({ src, width, quality }) => {
    return `${src}`;
  };

  return (
    <>
        <div className={Styles.Departure} id="1" key="1">
            <Row>
               <Col lg={6} md={6} >
                     <div className={Styles.head}>   
                        <span>Flying from Londen to Paris</span>
                        <BiCalendar />
                        <span className={Styles.date}>13/06/2023</span>
                     </div> 
                </Col>

                <Col lg={6} md={6} >
                <div className={Styles.flight}>   
                     <span>Departure</span> <MdOutlineFlight /> 
                </div>     
                </Col>
           </Row>
        </div>
        <div className={Styles.Details}>
          <Row>
                <Col lg={2} md={2} >
                  <div className={Styles.icon_wrap}>
                    <div className={Styles.flight}>
                    <MdOutlineFlight />
                    </div>
                  </div>

                </Col>
                <Col lg={8} md={8} >
                    <div className={Styles.Flight_details}>
                        <div className={Styles.title}>Economy Flight</div>
                        <div className={Styles.take_off}><RiFlightTakeoffFill /><span> 12:55</span> - Londen, Gatwick<span> (LGW)</span></div>
                        <div className={Styles.landing}><RiFlightLandLine/><span> 19:25 </span> - Paris, Charles De Gaulle <span> (CDG)</span></div>
                        <div className={Styles.duration}>
                            <AiOutlineClockCircle/><span> 5h 30m</span> 
                            <HiOutlineShoppingBag/> <span> 2pc </span>   
                            <FcMinus/> <span> 1 stop </span>   
                        </div>
                      
                    </div>
                </Col>
                <Col lg={2} md={2} >
                    <div className={Styles.button}> 
                <button type="button" value="Submit" class="btntype1 w-100 btn btn-primary">Book Now</button>
                </div>
                </Col>
            </Row>    
         </div>
    </>
  );
};

export default Departure;