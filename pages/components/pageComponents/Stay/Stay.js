import React,{useEffect, useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BiCalendar } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";



// This component is designed for reusing buttons
import ButtonType from "../../elementComponents/Button/Button";
import Styles from "./Stay.module.scss";

// FUNCTION FOR DATA LISTING COMPONENT
const Stay = (props) => {
  const imageLoader = ({ src, width, quality }) => {
    return `${src}`;
  };

  return (
    <>
        <div className={Styles.Stay} id="1" key="1">
            <Row>
               <Col lg={2} md={2}>
                <div className={Styles.day}>
                  Day - 1
                  </div> 
                </Col>
               <Col lg={6} md={8} xs={6} >
                     <div className={Styles.head}>   
                        <span> Paris</span>
                        <BiCalendar />
                        <span className={Styles.date}>13/06/2023</span>
                     </div> 
                </Col>

                <Col lg={4} md={2}  xs={6} >
                <div className={Styles.flight}>   
                     <span>Stay</span> <SlLocationPin />
                </div>     
                </Col>
           </Row>
        </div>
        <div className={Styles.details}>
            <Row>
               <Col lg={6} md={6} >
                     <div className={Styles.image_section}>   
                          <img alt="Activity Image " src="https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_02_thum-1.jpg"></img>
                     </div> 
                </Col>
                <Col lg={6} md={6} >
                     <div className={Styles.image_section}>   
                          <img alt="Activity Image " src="https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_02_thum-1.jpg"></img>
                     </div> 
                </Col>
                <Col lg={12} md={12} >
                  <p><b>Lorem ipsum dolor sit amet</b> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                  <p><b>Lorem ipsum dolor sit amet</b> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                
                </Col>
           </Row>

        </div>
      
    </>
  );
};

export default Stay;