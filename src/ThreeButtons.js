import React, {useState} from 'react';

export function DisplayValue(props) {

    //const [stateValue, setStateValue] = useState(props.startValue);
    
    return(
        <div>
            <p><b>{props.displayValue}</b></p>
        </div>
    )
}


export function CounterButton(props) {

    const clickHandler = () => {
        props.buttonClickAction(props.operationValue);
    }

    return(
        <div>
            <button onClick={clickHandler}>{props.operationValue > 0 ? "+" + props.operationValue : props.operationValue}</button>
        </div>
    )
}


export default function ThreeButtons(/*props*/) {
    const [value, setValue] = useState(0);

    const changeValue = (newValue) => { // тут newValue === props.operationValue из CounterButton, потому что ниже buttonClickAction={changeValue} а выше props.buttonClickAction(props.operationValue);
        setValue(value + newValue); // !
    }

    return(
        <>
        <CounterButton buttonClickAction={changeValue} operationValue={10} ></CounterButton>
        <CounterButton buttonClickAction={changeValue} operationValue={50} ></CounterButton>
        <CounterButton buttonClickAction={changeValue} operationValue={-100} ></CounterButton>
        <DisplayValue displayValue={value}></DisplayValue>
        </>
    )
}
