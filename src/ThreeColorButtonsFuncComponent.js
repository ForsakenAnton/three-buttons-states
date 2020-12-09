import React, { useState } from 'react';

/*export*/ function Display(props) {

    return <p style={{ backgroundColor: props.bgColor, color: props.color }}>Text: {props.bgColor}:{props.color}</p>
}


/*export*/ function SetColorButton(props) {

    const clickHandler = () => {
        props.buttonClickAction(props.bgColor, props.color);
    }

    return <button onClick={clickHandler} style={{ backgroundColor: props.bgColor, color: props.color }}>{props.bgColor}:{props.color}</button>

}



export default function ThreeColorButtonsFuncComponent() {

    const [bgColor, setBgColor] = useState('white');
    const [textColor, setTextColor] = useState('black');

    const changeColor = (newBgColor, newTextColor) => {
        setBgColor(newBgColor);
        setTextColor(newTextColor);
    }

    return (
        <>
            <SetColorButton buttonClickAction={changeColor} bgColor="green" color="red"></SetColorButton>
            <SetColorButton buttonClickAction={changeColor} bgColor="red" color="green"></SetColorButton>
            <SetColorButton buttonClickAction={changeColor} bgColor="black" color="white"></SetColorButton>
            <SetColorButton buttonClickAction={changeColor} bgColor="blue" color="white"></SetColorButton>
            <SetColorButton buttonClickAction={changeColor} bgColor="white" color="blue"></SetColorButton>
            <SetColorButton buttonClickAction={changeColor} bgColor="black" color="orange"></SetColorButton>

            <hr></hr>
            <p>... buttons with default props</p>

            <SetColorButton buttonClickAction={changeColor}></SetColorButton>
            <SetColorButton buttonClickAction={changeColor}></SetColorButton>

            <SetColorButton buttonClickAction={changeColor} bgColor="black"></SetColorButton>
            <SetColorButton buttonClickAction={changeColor} color="black"></SetColorButton>

            <SetColorButton buttonClickAction={changeColor} color="lightGreen"></SetColorButton>
            <SetColorButton buttonClickAction={changeColor} bgColor="steelBlue"></SetColorButton>


            <Display bgColor={bgColor} color={textColor}></Display>
        </>
    )
}

SetColorButton.defaultProps = {
    bgColor: "lightGreen", color: "steelBlue"
};
// все, наиздевался :)