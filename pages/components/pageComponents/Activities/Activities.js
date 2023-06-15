import React,{useEffect, useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BiCalendar } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { GrAttraction } from "react-icons/gr";



// This component is designed for reusing buttons
import ButtonType from "../../elementComponents/Button/Button";
import Styles from "./Activities.module.scss";

// FUNCTION FOR DATA LISTING COMPONENT
const Activities = (props) => {
  const imageLoader = ({ src, width, quality }) => {
    return `${src}`;
  };

  return (
    <>
        <div className={Styles.Activities} id="1" key="1">
            <Row>
               <Col lg={2} md={2}>
                <div className={Styles.day}>
                  Day - 2
                  </div> 
                </Col>
               <Col lg={6} md={6} xs={6} >
                     <div className={Styles.head}>   
                        <span> Paris</span>
                        <BiCalendar />
                        <span className={Styles.date}>13/06/2023</span>
                     </div> 
                </Col>

                <Col lg={4} md={4} xs={6} >
                <div className={Styles.flight}>   
                     <span>Activitie(s)</span> <GrAttraction />
                </div>     
                </Col>
           </Row>
        </div>
        <div className={Styles.details}>
            <Row>
               
                <Col lg={12} md={12} >
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Col>
                <Col lg={6} md={6} >
                     <div className={Styles.list}>   
                       <ol>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                       </ol>
                     </div> 
                </Col>

                <Col lg={6} md={6} >
                <div className={Styles.button}>   
                <button type="button" value="Submit" class="btntype1 btn btn-primary">Book Now</button> 
                </div>     
                </Col>
           </Row>

        </div>
      
    </>
  );
};

export default Activities;