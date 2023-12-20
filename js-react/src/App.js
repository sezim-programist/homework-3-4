import React, { useState } from 'react';
import './index.css';

function App() {
  const [colorSquare1, setColorSquare1] = useState('red');
  const [colorSquare2, setColorSquare2] = useState('blue');

  const handleSquareClick = () => {
    // Меняем цвета квадратов местами
    const tempColor = colorSquare1;
    setColorSquare1(colorSquare2);
    setColorSquare2(tempColor);
  };

  return (
    <div className="App">
      <div
        className="square"
        style={{ backgroundColor: colorSquare1 }}
        onClick={handleSquareClick}
      ></div>
      <div
        className="square"
        style={{ backgroundColor: colorSquare2 }}
        onClick={handleSquareClick}
      ></div>
    </div>
  );
}

export default App;



/*import { useState } from "react";

export default function MyApp(){
  return (
    <div>
      <h1>Counters that update suparaterely</h1>
      <MyButton />

      <MyButton />
    </div>
  )
}
function MyButton() {
  const[count, setCount] = useState(0)

  function handleClick(){
    setCount(count +1)
  }
  
  return<button onClick={handleClick}>Clicked {count} times</button>
}

export default function Search(){
  function publish(formData) {
  const content = formData.get ("content");
  const button = formData.get ("button");

  alert(`'${content} bsvkvivugu "$(button it)'`);
  }
  function save(formData) {
    const content = formData. get ("content");
    alert(`your draft of '${content}' has been saved!`)
  }
return(
  <form action="{publish}">
    <textarea name="content" rows={4} cols={40}/>
    <br/>
    <button type="sub"

  </form>
)
}*/

