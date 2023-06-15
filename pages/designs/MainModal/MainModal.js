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
import Select, {components, IndicatorSeparatorProps } from 'react-select';
import AsyncSelect from 'react-select/async'
import {Modal, Container } from "react-bootstrap";
import Link from "next/link";
import axios from 'axios';

import Input from "../../components/elementComponents/Input/Input";
import HeaderAtCenter from "../../components/pageComponents/Header/Header";
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

    // THIS FUNCTION IS USE TO FETCH LOCATION BASED ON SEARCH
    const getAPIResults = async (inputValue) => {
        if(inputValue.length >=3){
            //let destinations = await locationOptions(inputValue);
            const data = {
                searchtext: inputValue,   	
            };
            let destination = await axios.get(`./api/location?searchtext=${inputValue}`);
            //console.log(destination);
            let destinations =  destination.data.location;
            let locationDetails = []
            for (let index = 0; index < destinations.length; index++) {
                let location = {}
                location.key = index;
                location.label = destinations[index].value;
                location.value = destinations[index].value;
                locationDetails.push(location);
            }   
            return locationDetails;
        }
        else{
            return [];
        }
    };
    
    // THIS FUNCTION PROVIDES MATCHING RESULT TO SEARCH RESULT
    const loadOptions =  async (inputValue) => 
        // perform a request
        new Promise((resolve) => {
        setTimeout(() => {
            resolve(getAPIResults(inputValue));
        })
        });
  

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
                <Row>
                    <Col xs={10} className="mx-auto">
                        <HeaderAtCenter />
                    </Col>
                </Row>
                
                <Row >
                    <Col lg={6} md={12} xs={12}>
                       <div className={Styles.border}> 
                        <AsyncSelect
                            className={`search_formbox ${Styles.searchInput}`}
                            loadOptions={loadOptions}
                            placeholder= "Location"
                            onChange={(e) => {setLocation(e.value)}}
                            cacheOptions={true}
                            instanceId={`searchlocations1`}
                        
                        /> 
                        </div>
                    </Col>
                    <Col lg={6} md={12} xs={12}>
                    <div className={Styles.border}> 
                        <AsyncSelect
                            className={`search_formbox ${Styles.searchInput}`}
                            loadOptions={loadOptions}
                            placeholder= "Destination"
                            onChange={(e) => {setDestination(e.value)}}
                            cacheOptions={true}
                            instanceId={`searchlocations2`}
                        />
                        </div>
                    </Col>                
                    <Col lg={6} md={12} xs={12}>
                    <div className={Styles.border}> 
                        <Select placeholder="Select Duration" onChange={(e) => {setDuration(e.value)}} options={durations}/>
                     </div>   
                    </Col>
                    <Col lg={6} md={12} xs={12}>
                    <div className={Styles.border}> 
                        <div className={Styles.datePicker}>
                            <DatePicker
                                dateFormat="MMM dd"
                                placeholderText="Start Date"
                                selected={startDate}
                                onChange={(date) => {
                                    setStartDate(date); 
                                }}       
                            />
                        </div>
                       </div> 
                    </Col>
                    <Col lg={12} xs={12} md={12} >
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
                        <Link href={
                            {
                                pathname: '/listing'
                            }}
                        >
                            <ButtonType className={`${Styles.submit} btntype1`}  onClick={submit} name="SUBMIT" />
                        </Link>

                        

                    </Col>  
                </Row>
            </Container>
            
        </Modal>
    )
}

export default MainModal;