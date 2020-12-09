import React, {useState} from 'react';

export default function OneButton(props) {

    let {number, textOperation} = props;

    const [btnNumber, setBtnNumber] = useState(0);

    const clickHandler = () => {
        setBtnNumber(btnNumber + number /*props.number*/);
    }

    return(
        <div>
            <button onClick={clickHandler}>{textOperation}</button>
    <p>Result = {btnNumber}</p>
        </div>
    )
}