//////////////////////////////////////////////////////////////
///                                                         //
///                  Test page to learn                     //
///                                                         //
//////////////////////////////////////////////////////////////

import React, { useEffect, useState } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "react-bootstrap/Dropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Select from 'react-select';

import Input from "../../components/elementComponents/Input/Input";
import Header from "../../components/pageComponents/Header/Header";
import ButtonType from "../../components/elementComponents/Button/Button";
import Styles from "./MainModal.module.scss";
import { Container } from "react-bootstrap";

const MainModal = () => {
    const [travelerDropShow, settravelerDropShow] = useState(false);
    const [childCount, setchildCount] = useState([]);
    const [children, setchildren] = useState(0);
    const [adult, setAdult] = useState(1);

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
      // CHILD AGE OPTIONS
      const childageOptions = [
        { value: "1", label: "1" ,key:"1"},
        { value: "2", label: "2" ,key:"2"},
        { value: "3", label: "3" ,key:"3"},
        { value: "4", label: "4" ,key:"4"},
        { value: "5", label: "5" ,key:"5"},
        { value: "6", label: "6" ,key:"6"},
        { value: "7", label: "7" ,key:"7"},
        { value: "8", label: "8" ,key:"8"},
        { value: "9", label: "9" ,key:"9"},
        { value: "10", label: "10" ,key:"10"},
        { value: "11", label: "11" ,key:"11"},
        { value: "12", label: "12" ,key:"12"}
      ]
    

    const setDropDownVisibility = (e) => {
        let visibility = travelerDropShow ? false : true
        settravelerDropShow(visibility); 
    }

    const handleAdultCount = (e) => {
        setAdult(e.value);
    }

    const handleCountChild = (e) => {
        setchildren(e.value);
        const elements = Array.from({ length: e.value }, (_, index) => {
          return index;
        });
        setchildCount(elements)
    }

    // FUNCTION TO HANDLE CHILD AGES
    const handleCountChildAges = (e) => {
    
    }

    return(
        <>  
            <Container className={Styles.mainmodal}> 
                <Header />
                <Row >
                    <Col xs={6}>
                        <Input placeholder="Location"/>
                    </Col>
                    <Col xs={6}>
                        <Input  placeholder="Destination"/>
                    </Col>                
                    <Col xs={6}>
                        <Input type="time" max="23:59" placeholder="Duration"/>
                    </Col>
                    <Col xs={6}>
                        <Input type="date" placeholder="Select your start date"/>
                    </Col>
                    <Col xs={12} md={12}>
                        <Dropdown className={Styles.selecttraveller_box}  show={travelerDropShow} onToggle={setDropDownVisibility}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {adult} Adults
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Row className="g-3">
                            <Col xs={6}>
                                <span className={Styles.label}>Adult</span>
                                <Select class="d-inline-block sort-select" defaultValue={sortByOptions[(adult-1)]} onChange={handleAdultCount} options={sortByOptions}/>
                            </Col>
                            <Col xs={6}>
                                <span className={Styles.label}>Children</span>
                                <Select class="d-inline-block sort-select" onChange={handleCountChild} defaultValue={childcountOptions[0]} options={childcountOptions}/>
                            </Col>
                            {childCount.map((item, index) => {
                                return(
                                <Col xs={6} className="mt-3 custom" key={index}>
                                    <span className={Styles.label}>Child age </span>
                                    <Select className="d-inline-block sort-select select-age" onChange={handleCountChildAges} options={childageOptions}/>
                                </Col>
                                )
                            })}
                            </Row>
                            <div className="mt-3">
                            <ButtonType className={`${Styles.applyButton} btntype2`} name="Apply" />
                            </div>
                        </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col xs={12} md={12}>
                        <ButtonType className={Styles.submit} name="SUBMIT" />
                    </Col>
                    
                </Row>
            </Container>
            
        </>
        
    )
}

export default MainModal;