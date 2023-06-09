import React, {useState}from "react";
import {Container} from "react-bootstrap";
import ButtonType from "./components/elementComponents/Button/Button";
import MainModal from "./designs/MainModal/MainModal";


const ModalButton = (props) => {

	const [modalShow, setModalShow] = useState(false);

	const openModal = () => {
		setModalShow(true)
	}

	return(
		<>
		<MainModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          setmodalshow = {setModalShow}
      	/>
		<Container>
			<ButtonType  name="Open Modal" onClick={openModal} />
		</Container>
		</>
	)
}

export default ModalButton