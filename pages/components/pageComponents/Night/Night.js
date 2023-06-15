import React,{useEffect, useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BiCalendar } from "react-icons/bi";
import { LuBedDouble } from "react-icons/lu";
import { AiTwotoneStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";



// This component is designed for reusing buttons
import ButtonType from "../../elementComponents/Button/Button";
import Styles from "./Night.module.scss";

// FUNCTION FOR DATA LISTING COMPONENT
const Night = (props) => {
  const imageLoader = ({ src, width, quality }) => {
    return `${src}`;
  };

  return (
    <>
        <div className={Styles.night} id="1" key="1">
            <Row>
               <Col lg={1} md={2}>
                <div className={Styles.day}>
                  <b>Day-1</b>
                  </div> 
                </Col>
               <Col lg={6} md={6} xs={6} >
                     <div className={Styles.head}>   
                        <span> Accomodation</span>
                        <BiCalendar />
                        <span className={Styles.date}>13/06/2023</span>
                     </div> 
                </Col>

                <Col lg={5} md={4} xs={6} >
                <div className={Styles.flight}>   
                     <span>2 Nights</span> <LuBedDouble />
                </div>     
                </Col>
           </Row>
        </div>
        <div className={Styles.details}>
            <Row>
               <Col lg={5} md={12} >
                     <div className={Styles.image_section}>   
                          <img alt="Activity Image " src="https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_02_thum-1.jpg"></img>
                     </div> 
                </Col>
                <Col lg={7} md={12} >
                     <div className={Styles.detail_section}>  
                        <div className={Styles.title}>Hotel 3 Star - (Single)</div> 
                        <div className={Styles.Location}><SlLocationPin /> Le Kremlin</div>
                        <div className={Styles.rating}>
                           <AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiOutlineStar /><AiOutlineStar />
                         </div>
                         <div className={Styles.content}>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                         </div>
                         <div className={Styles.book_now}>
                            <button type="button" value="Submit" class="btntype1 btn btn-primary">Book Now</button> 
                         </div>
                     </div> 
                </Col>
             
           </Row>

        </div>
      
    </>
  );
};

export default Night;