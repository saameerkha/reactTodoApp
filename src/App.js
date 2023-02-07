import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState(["Add Text"]);
  const [text, setText] = useState("");

  let add = () => {
    if (count < 10) {
      setCount(count + 1);

      arr.push(text);
      setArr([...arr]);
      setText("");
    }
  };
  
  let editButton = (i) => {
    let edit = prompt();
let newValues = [];
    arr.map((item) => {
      if (item === arr[i]) {
         item = edit
         console.log('item', item)
         newValues.push(item);
      }else{
        newValues.push(item);
      }
    });
    setArr(newValues);
  };

  let remove = (i) => {
    console.log(arr[i]);
    let filterdItem = arr.filter((item) => item != arr[i]);
    console.log("filterd", filterdItem);
    setArr(filterdItem);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>{count}</p>

        {arr.map((x, i) => (
          <p>
            {x}{" "}
            <button className="edit" onClick={() => editButton(i)}>
              edit
            </button>
            <button className="del" onClick={() => remove(i)}>
              delete
            </button>
          </p>
        ))}

        <input
          onChange={(textData) => {
            setText(textData.target.value);
          }}
          value={text}
          placeholder="Enter text"
        />
        <p>{text}</p>
        <button onClick={add}>add</button>
      </header>
    </div>
  );
}

export default App;