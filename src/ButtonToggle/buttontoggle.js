import { useState } from "react";
import { ButtonContainer, Button } from "./styles.buttontoggle";

function ButtonToggle(props) {
    const [active, setActive] = useState(false);
  
    const toggleActive = (booleanState) => {
      setActive(booleanState);
      props.toggleTheme();
    };
    return (
      <ButtonContainer>
        <Button
          active={active}
          buttonType={"off"}
          onClick={() => toggleActive(false)}
          side="left"
        >
          OFF
        </Button>
        <Button
          side="right"
          active={active}
          buttonType={"on"}
          onClick={() => toggleActive(true)}
        >
          ON
        </Button>
      </ButtonContainer>
    );
  }

  export default ButtonToggle;