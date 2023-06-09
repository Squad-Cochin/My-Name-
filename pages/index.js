//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
//                            LISTING PAGE DISPLAY THROUGH THIS COMPONENT.                              //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState}from "react";
import {Container} from "react-bootstrap";
import ButtonType from "./components/elementComponents/Button/Button";
import MainModal from "./designs/MainModal/MainModal";
import Head from "next/head";
const Home = () => {
  const [modalShow, setModalShow] = useState(false);
	const openModal = () => {
		setModalShow(true)
	}
  return (
    <>
      <Head>
        <title>Moonstride</title>
        <meta
        name="description"
        content="Check out the transfer Detail Page..."
        key="desc"
        />
      </Head>
      <MainModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          setmodalshow = {setModalShow}
      />
      <Container>
        <ButtonType  name="Open Modal" onClick={openModal} />
      </Container>
    </>
  );
};

export default Home;

