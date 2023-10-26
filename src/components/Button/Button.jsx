import styled from "styled-components";
const StyledButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) =>
    props.boderColor ? `1px solid ${props.boderColor}` : "none"};
  border-radius: ${(props) => props.borderRadius};
  background: ${(props) => props.bgColor};
  font-weight: 500;
  line-height: 21px;
  color: ${(props) => props.textColor};
  font-size: ${(props) => props.fontSize}px;
  img {
    margin-right: 8px;
  }
  cursor: pointer;
`;
export const Button = ({
  label,
  width,
  height,
  textColor,
  bgColor,
  boderColor,
  percent,
  fontSize,
  borderRadius,
  bgHover,
  children,
  ...rest
}) => {
  return (
    <StyledButton
      width={width}
      height={height}
      textColor={textColor}
      bgColor={bgColor}
      boderColor={boderColor}
      fontSize={fontSize}
      borderRadius={borderRadius}
      {...rest}
    >
      {label ? label : children}
    </StyledButton>
  );
};
Button.defaultProps = {
  bgColor: "black",
  textColor: "white",
  width: "128px",
  height: "46px",
  fontSize: 16,
};
