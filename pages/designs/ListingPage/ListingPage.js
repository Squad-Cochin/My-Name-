import React from 'react'
import ListingProbox from '../../components/pageComponents/ListingProbox/ListingProbox'
import BookingSidebar from '../../components/pageComponents/BookingSidebar/BookingSidebar'
import { Col, Row } from 'react-bootstrap'
import { HeaderAtLeft } from '../../components/pageComponents/Header/Header'
import TripSummarySidebar from '../../components/pageComponents/TripSummarySidebar/TripSummarySidebar'
import Style from "../ListingPage/ListingPage.module.scss"

const ListingPage = ()=> {
    console.log(Style)
  return (
    <>  
        <HeaderAtLeft />
        <div className="container"> 
        <Row className={Style.ListingPage}>           
                <Col lg={4} md={12} className={Style.sidebar} >
                    <BookingSidebar />
                    <TripSummarySidebar />
                </Col>
                <Col lg={8} md={12} >
                    <ListingProbox />
                </Col>  
         </Row>
        </div> 
    </>
  )
}

export default ListingPage