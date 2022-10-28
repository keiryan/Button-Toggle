import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    (props.active && props.buttonType === "on" && "#05CA00") ||
    (!props.active && props.buttonType === "off" && "#D90001") ||
    "#000"};
  padding: 20px;
  flex: 1;
  border: 2px
    ${(props) =>
      (props.active && props.buttonType === "on" && "#05CA00") ||
      (!props.active && props.buttonType === "off" && "#D90001") ||
      "#595959"}
    solid;
  text-transform: uppercase;
  background-color: ${(props) =>
    (props.active && props.buttonType === "on" && "#CDF4CC") ||
    (!props.active && props.buttonType === "off" && "#F7CCCC") ||
    "#fff"};
  font-weight: bold;
  border-radius: ${(props) =>
    (props.side === "left" && "10px 0 0 10px") ||
    (props.side === "right" && "0 10px 10px 0")};
  :hover {
    background-color: aliceblue;
  }
`;