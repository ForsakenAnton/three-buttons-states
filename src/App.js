import logo from './logo.svg';
import './App.css';

import OneButton from './OneButton';
import ThreeButtons from './ThreeButtons';
import ThreeColorButtonsFuncComponent from './ThreeColorButtonsFuncComponent';
import ThreeColorButtonsClassComponent from './ThreeColorButtonsClassComponent';
import TheQuoteOfTheDay from './TheQuoteOfTheDay';

function App() {

/////////////////
  let number = 10;
  let textOperation = `Plus ${number}`;
///////////////////////////////////////

///////////////////////////////////////
  let quote = 'I am not going to do tomorrow what I can do today';
  let authorOfQuote = 'I';
  let quoteStyle = {
    border: '10px solid red',
    backgroundColor: 'whitesmoke',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: '20px',
    width: '50%',
    margin: 'auto auto 60px'
  };
///////////////////////////////////////

  return (
    <div className="App">
      <h3>One button</h3>
      <OneButton number={number} textOperation={textOperation}></OneButton>

      <hr /><hr /><hr />

      <h3>Three buttons</h3>
      <ThreeButtons></ThreeButtons>

      <hr /><hr /><hr />

      <h3><del>Three</del> many (!) color buttons on function component</h3>
      <ThreeColorButtonsFuncComponent></ThreeColorButtonsFuncComponent>

      <hr /><hr /><hr /><hr /><hr /> <hr />

      <h3>Three color buttons on class component</h3>
      <ThreeColorButtonsClassComponent></ThreeColorButtonsClassComponent>

      <hr /><hr /><hr /><hr /><hr /> <hr />

      <h3>The quote of the day</h3>
      <TheQuoteOfTheDay quote={quote} author={authorOfQuote} style={quoteStyle}></TheQuoteOfTheDay>
    </div>
  );
}

export default App;
