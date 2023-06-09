/////////////////////////////////////////////////////////////////////////////////////////////////////////
///                                                                                                    //
///                          PAGE FOR SHOWING MAIN MODAL IN THE FIRST PAGE                             //
///                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "react-bootstrap/Dropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Select from 'react-select';
import {Modal, Container } from "react-bootstrap";

import Input from "../../components/elementComponents/Input/Input";
import Header from "../../components/pageComponents/Header/Header";
import ButtonType from "../../components/elementComponents/Button/Button";
import Styles from "./MainModal.module.scss";

// FUNCTION FOR SHOWING MAIN MODAL
const MainModal = (props) => {
    const [travelerDropShow, setTravelerDropShow] = useState(false);
    const [location, setLocation] = useState("");
    const [destination, setDestination] = useState("");
    const [duration, setDuration] = useState(1)
    const [childCount, setchildCount] = useState(0);
    const [adult, setAdult] = useState(1);
    const [startDate, setStartDate] = useState(new Date());

    const sortByOptions = [
        { value: "1", label: "1" ,key:"1"},
        { value: "2", label: "2" ,key:"2"},
        { value: "3", label: "3" ,key:"3"},
        { value: "4", label: "4" ,key:"4"},
        { value: "5", label: "5" ,key:"5"},
        { value: "6", label: "6" ,key:"6"}
    ];
    // NUMBER OF CHILD PASSENGER OPTIONS
    const childcountOptions = [
        { value: "0", label: "0" ,key:"0"},
        { value: "1", label: "1" ,key:"1"},
        { value: "2", label: "2" ,key:"2"},
        { value: "3", label: "3" ,key:"3"},
        { value: "4", label: "4" ,key:"4"},
    ];

    // DEFAULT LOCATIONS
    const locations = [
        { value: "UK", label: "UK" ,key:"0"},
        { value: "Canada", label: "Canada" ,key:"1"},
        { value: "Germany", label: "Germany" ,key:"2"},
        { value: "India", label: "India" ,key:"3"}
    ]

    // DEFAULT DURATIONS
    const durations = [
        { value: "1", label: "1 day" ,key:"1"},
        { value: "2", label: "2 days" ,key:"2"},
        { value: "3", label: "3 days" ,key:"3"},
        { value: "4", label: "4 days" ,key:"4"},
        { value: "5", label: "5 days" ,key:"5"},
    ]

    // FUNCTION TO OPEN ADULT AND CHILD SELECTOR
    const setDropDownVisibility = (e) => {
        let visibility = travelerDropShow ? false : true
        setTravelerDropShow(visibility); 
    }

    // FUNCTION TO CLOSE APPLAY BUTTON
    const applayTravellers = () => {
        var parent = document.querySelector(".dropdown-menu");
        parent.classList.remove("show");
    }

    // FUNCTION TO SEND DATA AFTER SUBMIT
    const submit = () => {
        let year = startDate.getFullYear();
        let month = String(startDate.getMonth() + 1).padStart(2, '0'); 
        let day = String(startDate.getDate()).padStart(2, '0');
        let date = `${year}-${month}-${day}`;
        let submitData = {
            "source_city" : location,
            "destination_city" : destination,
            "start_date" : date,
            "number_of_adult" : adult,
            "number_of_child" : childCount,
            "duration" : duration
        }
        console.log(submitData)
    }

    return(
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered > 
            <Container className={Styles.mainmodal}> 
                <Header />
                <Row >
                    <Col xs={6}>
                        <Select placeholder="Select location" onChange={(e) => {setLocation(e.value)}} options={locations}/>
                    </Col>
                    <Col xs={6}>
                        <Input  placeholder="Destination" onChange={(e) => {setDestination(e.target.value)}} value={destination}/>
                    </Col>                
                    <Col xs={6}>
                        <Select placeholder="Select Duration" onChange={(e) => {setDuration(e.value)}} options={durations}/>
                    </Col>
                    <Col xs={6}>
                        <div className={Styles.datePicker}>
                            <DatePicker
                                dateFormat="MMM dd"
                                selected={startDate}
                                onChange={(date) => {
                                    setStartDate(date); 
                                }}       
                            />
                        </div>
                    </Col>
                    <Col xs={12} md={12}>
                        <Dropdown className={Styles.selecttraveller_box}  show={travelerDropShow} onToggle={setDropDownVisibility}>
                            <Dropdown.Toggle  variant="success" id="dropdown-basic">
                                {adult} Adults
                            </Dropdown.Toggle>
                            <Dropdown.Menu className={Styles.Dropdown_box}>
                                <Row className="g-3">
                                    <Col xs={6}>
                                        <span className={Styles.label}>Adult</span>
                                        <Select class="d-inline-block sort-select" defaultValue={sortByOptions[(adult-1)]} onChange={(e) => {setAdult(e.value)}} options={sortByOptions}/>
                                    </Col>
                                    <Col xs={6}>
                                        <span className={Styles.label}>Children</span>
                                        <Select class="d-inline-block sort-select" onChange={(e) => {setchildCount(e.value)}} defaultValue={childcountOptions[0]} options={childcountOptions}/>
                                    </Col>
                                </Row>
                                <div className="mt-3">
                                    <ButtonType className={`${Styles.applyButton} btntype2`} onClick={ applayTravellers } name="Apply" />
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col xs={12} md={12}>
                        <ButtonType className={Styles.submit} onClick={submit} name="SUBMIT" />
                    </Col>  
                </Row>
            </Container>
            
        </Modal>
    )
}

export default MainModal;