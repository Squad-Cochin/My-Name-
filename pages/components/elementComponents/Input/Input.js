///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
//                     THIS PAGE IS FOR INPUT BOX COMPONENT                          //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////

// Packages installed
import Form from "react-bootstrap/Form";

// Files import
import Styles from "./Input.module.scss";

// Default function of the input box component.
const InputType = (props) => {
  return (
    <Form.Group className={`mb-3 ${props.class}`}>
      {props.label != "" && <Form.Label>{props.label}{props.mandatory}</Form.Label>}

      <Form.Control type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
    </Form.Group>
  );
};

// Default properties of the input box component.
InputType.defaultProps = {
  type: "text",
  width: "auto",
  label: "",
  placeholder: "input",
  mandatory: "",
  value: "",
  onChange: "", 
  active: false,
  class: "formbox",
};

// Export function
export default InputType;
