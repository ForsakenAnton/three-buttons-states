import logo from './logo.svg';
import './App.css';
import OneButton from './OneButton';
import ThreeButtons from './ThreeButtons';

function App() {

  let number = 10;
  let textOperation = `Plus ${number}`;  

  return (
    <div className="App">
      <h3>One button</h3>
      <OneButton number={number} textOperation={textOperation}></OneButton>

      <hr/>
      <hr/>
      <hr/>

      <h3>Three buttons</h3>
      <ThreeButtons></ThreeButtons>
    </div>
  );
}

export default App;
