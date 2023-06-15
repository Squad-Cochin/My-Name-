////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
//      ON THE COMPONENT PAGE THAT DISPLAY THE HOMEPAGE, A SIDEBAR FILTER WILL ALSO BE INCLUDED.          //
//         THIS COMPONENT WILL INCLUDE ALL FILTER TYPE FUNCTIONALITIES ON TYHE HOMEPAGE                   //                                                                         
//                                                                                                        //  
////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, { useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { IoIosCar } from "react-icons/io";
import { LuBedDouble } from "react-icons/lu";
import { BsMoon } from "react-icons/bs";

// *Slide bar css page 
import Styles from "./TripSummarySidebar.module.scss";

const TripSummarySidebar = () => {
  // *This function is used to close the sidebar
  const closeIcon = () => {
    document.body.classList.toggle("sidebarActive");
  };
  
  return (
    <aside>
      <div className={Styles.sidebar_section}>
        
      
        <div className={Styles.sidebar_box}>
        <div className={Styles.hedding}>Your Trip Summary</div>
        
          <div className={Styles.sidebar_box_contents}>
             <span className={Styles.icon}><SlLocationPin /></span>   3 Destination
          </div>
          <div className={Styles.sidebar_box_contents}>
             <span className={Styles.icon}> <IoIosCar /> </span>3 Transports
          </div>
          <div className={Styles.sidebar_box_contents}>
             <span className={Styles.icon}> <LuBedDouble /> </span>2 Accomodations
          </div>
          <div className={Styles.sidebar_box_contents}>
              <span className={Styles.icon}> <BsMoon /></span>5 Nights
          </div>
      </div>
      </div>
    </aside>
  );
};
export default TripSummarySidebar;


