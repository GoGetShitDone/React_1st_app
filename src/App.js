// import Button from "./Button";
// import styles from "./Button.module.css";

import { useState, useEffect } from "react";

function App() {
  
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev +1);
  const onChange = (event) => setKeyword(event.target.value);


  useEffect(() => {
    console.log("I run only once.");
  }, [] );

  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword] );

  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter] );

  // useEffect(() => {
  //   console.log("I run when 'keyword' and 'counter' changes.");
  // }, [keyword, counter] );


  return (
    <div>
      <input 
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search Here"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Here</button>
    </div>
  );
}

export default App;