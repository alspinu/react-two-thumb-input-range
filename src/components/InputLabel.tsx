import React from "react"
import styled, { StyledObject } from "styled-components"
const bubbleStyle: StyledObject = {
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  backgroundColor: "#1976d2",
  width: "48px",
  height: "24px",
  top: "-32px",
  borderRadius: "2px",
  transformOrigin: "bottom center",
}

const bubbleTextStyle: StyledObject = {
  display: "inline-block",
  fontSize: "0.75rem",
  lineHeight: "1.2",
  letterSpacing: "0.01071em",
}
interface IProps {
  value: [number, number]
  thumbPositions: {
    rangeValue1: number
    rangeValue2: number
  }
  labelStyle?: StyledObject
  labelTextStyle?: StyledObject
}
const outputInnerStyle = styled.div<IProps>`
left: "calc(${props => props.thumbPositions.rangeValue1}% - 24px)";
"&::after": {
  content: '""';
  display: "block";
  borderWidth: "8px 8px 0";
  marginLeft: "-8px";
  borderStyle: "solid";
  color: "currentColor";
  borderColor: '${props => props.labelStyle?.backgroundColor || bubbleStyle.backgroundColor} transparent transparent';
  position: "absolute";
  bottom: "-8px";
  left: "50%";
  ${bubbleStyle};
  ${props => props.labelStyle}
},

`;
const InputLabel = ({ value, thumbPositions, labelStyle, labelTextStyle }: IProps) => {
  return (
    <div
      style={{
        position: "relative",
        width: "98%",
        height: "15px",
      }}
    >
      <output
        style={{
          left: `calc(${thumbPositions.rangeValue1}% - 24px)`,
          "&::after": {
            content: `""`,
            display: "block",
            borderWidth: "8px 8px 0",
            marginLeft: "-8px",
            borderStyle: "solid",
            color: "currentColor",
            borderColor: `${labelStyle?.backgroundColor || bubbleStyle.backgroundColor} transparent transparent`,
            position: "absolute",
            bottom: "-8px",
            left: "50%",
          },
          ...bubbleStyle,
          ...labelStyle,
        }}
      >
        <small style={{ ...bubbleTextStyle, ...labelTextStyle }}>{value[0]}</small>
      </output>
      <output
        style={{
          left: `calc(${thumbPositions.rangeValue2}% - 24px)`,
          "&::after": {
            content: `""`,
            display: "block",
            borderWidth: "8px 8px 0",
            marginLeft: "-8px",
            borderStyle: "solid",
            borderColor: `${labelStyle?.backgroundColor || bubbleStyle.backgroundColor} transparent transparent`,
            position: "absolute",
            bottom: "-8px",
            left: "50%",
          },
          ...bubbleStyle,
          ...labelStyle,
        }}
      >
        <small style={{ ...bubbleTextStyle, ...labelTextStyle }}>{value[1]}</small>
      </output>
    </div>
  )
}


export default InputLabel
