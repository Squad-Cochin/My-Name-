///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
//                        THIS PAGE IS FOR CHECKBOX COMPONENT                        //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////


// Packages installed
import Form from "react-bootstrap/Form";

// Files import
import Styles from "./Checkbox.module.scss";

// Default function for checkbox component
const CheckboxType = (props) => {
  return (
    <div key={props.id} className= "mb-3">
      <label>
        <Form.Check className={props.className} value={props.value} type={props.type} label={props.label} name={props.group} onClick={props.onClick} checked={props.checked} onChange={props.onChange}/>
      </label>
    </div>
  );
};

// Default properties of the checkbox component.
CheckboxType.defaultprops = {
  type: "checkbox",
  label: "Label",
  mandatory: "*",
  active: false,
  class: "checkbox",
  group:"",
  checked: false,
  value:"",
  onClick:"",
  className: "",
  onchange: () => {}
};

// Export function
export default CheckboxType;
