import React from "react"
import styled, { StyledObject } from "styled-components"
interface IInputRange {
  referance: React.MutableRefObject<HTMLInputElement | null>
  name: string
  onChange: () => void
  value: number
  min: number
  max: number
  thumbColor?: string
  thumbStyle?: StyledObject
  thumbFocusStyle?: StyledObject
  ariaValueText?: string
}

const styledInput = styled.input<IInputRange>`
background: "${props => props.thumbColor}"
pointerEvents: "none";
appearance: "none";
outline: "none";
transformOrigin: "center";
position: "absolute";
padding: 0;
margin: 0;
left: 0;
width: "100%";
height: "100%";
background: "transparent";
display: "flex";
justify-content: "center";
align-items: "center";
&::-webkit-slider-runnable-track {
  width: "100%",
  height: "100%",
  background: "transparent",
},
"&::-webkit-slider-thumb": {
  z-index: 4,
  appearance: "none",
  pointer-events: "all",
  cursor: "pointer",
  width: "12px",
  height: "12px",
  border-radius: "100%",
  transition: "box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1)",
  ${props => props.thumbStyle}
},
"&:focus::-webkit-slider-thumb": {
  boxShadow: "0px 0px 0px 4px rgba(25, 118, 210, 0.16)",
  ${props => props.thumbFocusStyle},
}
`
const InputRange = ({
  max,
  min,
  name,
  onChange,
  referance,
  value,
  thumbStyle,
  thumbColor,
  thumbFocusStyle,
  ariaValueText,
}: IInputRange) => {
  return (
    <>
      <input
        aria-valuemax={max}
        aria-valuemin={min}
        aria-valuenow={value}
        aria-valuetext={ariaValueText}
        step={1}
        ref={referance}
        type="range"
        name={name}
        onChange={onChange}
        value={value}
        min={min}
        max={max}
        css={{
          pointerEvents: "none",
          appearance: "none",
          WebkitAppearance: "none",
          MozAppearance: "none",
          outline: "none",
          transformOrigin: "center",
          position: "absolute",
          padding: 0,
          margin: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "&::-webkit-slider-runnable-track": {
            width: "100%",
            height: "100%",
            background: "transparent",
          },
          "&::-webkit-slider-thumb": {
            zIndex: 4,
            appearance: "none",
            WebkitAppearance: "none",
            MozAppearance: "none",
            pointerEvents: "all",
            cursor: "pointer",
            width: "12px",
            height: "12px",
            borderRadius: "100%",
            background: thumbColor,
            transition: "box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1)",
            ...thumbStyle,
          },
          "&:focus::-webkit-slider-thumb": {
            boxShadow: "0px 0px 0px 4px rgba(25, 118, 210, 0.16)",
            ...thumbFocusStyle,
          },
        }}
      ></input>
    </>
  )
}

export default InputRange
