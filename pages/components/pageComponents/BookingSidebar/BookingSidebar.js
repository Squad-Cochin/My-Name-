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
        <div className={`${Styles.sidebar_header_wrapper} d-flex justify-content-between align-items-center`}>
          
         
          <div className={Styles.closeButton} onClick={closeIcon}>
            
            <svg stroke="currentColor" fill="#ffffff" strokeWidth="0" viewBox="0 0 16 16" height="35" width="35" xmlns="http://www.w3.org/2000/svg"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path></svg>
          </div>

        </div>
      
        <div className={Styles.sidebar_box}>
        <h6 className={Styles.hedding}>Your Bookings</h6>
        <hr />
          <div className="mb-3">
              <h1 className={Styles.price}><b>$ 0.00</b></h1>
              <p className={Styles.pricetext}>price per person</p>
        </div>
      </div>
      </div>
    </aside>
  );
};
export default BookingSidebar;


