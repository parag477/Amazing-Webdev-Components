import React from 'react';
import { useState } from 'react';
const App = () => {
  let [count, setCount] = useState(0);
  function handleClickIncrease() {
          setCount(count + 1)
  }
  const handleClickDecrease=() => {
    setCount(count - 0.5);
  }
  const handleClickReset=() => {
    setCount(0);
  }

  return (
    <div>
      <h1>Count Me</h1>

        <p>
         Current count of mine be
          <b> {count} </b>.
      </p>
      <div className="buttonClass">
      <button type="button" onClick={handleClickDecrease}>Decrease</button>
      <button type="button" onClick={handleClickReset}>Reset</button>
      <button onClick={handleClickIncrease}>Increase</button>
      </div>
    </div>
  );
}
export default App;