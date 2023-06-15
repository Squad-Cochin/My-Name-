///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
//                        THIS PAGE IS FOR BUTTON COMPONENT                          //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////

// Packages installed
import Button from "react-bootstrap/Button";

// Files import
import Styles from "./Button.module.scss";

// Default function of the button component.
const ButtonType = (props) => {
  return (
    <>
      <Button
        variant="primary"
        type="button"
        value={props.value}
        className={props.className ?? `${Styles.btntype1}`}
        onClick={props.onClick}
        >
          {props.icon}
          {props.name}
        </Button>
    </>
  );
};

// Default properties of the button component.
ButtonType.defaultProps = {
  width: "auto",
  icon: "",
  name: "",
  value: "Submit",
  disabled: false,
  className: "btntype2",
  onClick: function(){},
};

// Export function
export default ButtonType;
