///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
//                THIS PAGE IS FOR RADIO BUTTON COMPONENT                            //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////



// Packages installed
import Form from "react-bootstrap/Form";

// Files import
import Styles from "./RadioButton.module.scss";

// Default function of the radio button component.
const RadioButton = (props) => {
  return (
    <div key={props.id} className= "mb-3">
      <label>
        <Form.Check className={props.className} value={props.value} type="radio" label={props.label} name={props.name} onClick={props.onClick} checked={props.checked} onChange={props.onChange}/>
      </label>
    </div>
  );
};

// Default properties of the radio button component.
RadioButton.defaultprops = {
  title: "Select",
  name: "",
  checked: false,
  onchange: () => {}
};

// Export function
export default RadioButton;
