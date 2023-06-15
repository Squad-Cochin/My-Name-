////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
//      ON THE COMPONENT PAGE THAT DISPLAY THE HOMEPAGE, A SIDEBAR FILTER WILL ALSO BE INCLUDED.          //
//         THIS COMPONENT WILL INCLUDE ALL FILTER TYPE FUNCTIONALITIES ON TYHE HOMEPAGE                   //                                                                         
//                                                                                                        //  
////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, { useState } from "react";

// *Slide bar css page 
import Styles from "./BookingSidebar.module.scss";

const BookingSidebar = () => {
  // *This function is used to close the sidebar
  const closeIcon = () => {
    document.body.classList.toggle("sidebarActive");
  };
  
  return (
    <aside>
      <div className={Styles.sidebar_section}>
       
        <div className={Styles.sidebar_box}>
           <h6 className={Styles.hedding}>Your Bookings</h6>
       
          <div className="">
              <h1 className={Styles.price}><b>$0.00</b></h1>
              <p className={Styles.pricetext}>price per person</p>
        </div>
      </div>
      </div>
    </aside>
  );
};
export default BookingSidebar;


