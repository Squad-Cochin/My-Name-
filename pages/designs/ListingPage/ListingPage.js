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
        <hr />
        <Row className="text-center">
            <Col xs={11}  className="mx-auto">
            <Row>
                <Col xs={4} className={Style.sidebar} >
                    <BookingSidebar />
                    <TripSummarySidebar />
                </Col>
                <Col xs={8}>
                    <ListingProbox />
                </Col>
            </Row>
            </Col>
            
        </Row>
        
    </>
  )
}

export default ListingPage