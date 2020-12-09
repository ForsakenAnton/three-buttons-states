import React from 'react';
//import React, {useState} from 'react';

/*export*/ class Display extends React.Component {

    render() {
        return <p style={{ backgroundColor: this.props.bgColor, color: this.props.color }}>Text: {this.props.bgColor}: {this.props.textColor}</p>
    }
}

/*export*/ class SetColorButton extends React.Component {

    render() {
        const clickHandler = () => {
            this.props.buttonClickAction(this.props.bgColor, this.props.color);
        }

        return <button onClick={clickHandler} style={{ backgroundColor: this.props.bgColor, color: this.props.color }}>{this.props.bgColor}:{this.props.color}</button>
    }
}



export default class ThreeColorButtonsClassComponent extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {bgColor: 'white', textcolor: 'black'};
    // }

    state = { bgColor: 'white', textcolor: 'black' };

    render() {
        // const [bgColor, setBgColor] = useState('white');
        // const [textColor, setTextColor] = useState('black');

        const changeColor = (newBgColor, newTextColor) => {
            this.setState({
                bgColor: newBgColor,
                textColor: newTextColor
            });
            // setBgColor(newBgColor);
            // setTextColor(newTextColor);
        }

        return (
            <>
                <SetColorButton buttonClickAction={changeColor} bgColor="green" color="red"></SetColorButton>
                <SetColorButton buttonClickAction={changeColor} bgColor="red" color="green"></SetColorButton>
                <SetColorButton buttonClickAction={changeColor} bgColor="black" color="white"></SetColorButton>

                <hr />
                <p>... button with default props</p>
                <SetColorButton buttonClickAction={changeColor}></SetColorButton>

                <Display bgColor={this.state.bgColor} color={this.state.textColor}></Display>
            </>
        )
    }
}

SetColorButton.defaultProps = {
    bgColor: "lightGreen", color: "steelBlue"
};