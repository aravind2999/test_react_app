import React, {useState} from "react";
import axios from "axios";
function Quotes() {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

function getQuote() {
    axios("http://localhost:3333/").then(response => {
        console.log("abc" + response.data);
      setText(response.data.text);
      setAuthor(response.data.author);
    });
  }
return (
    <div>
      <button onClick={getQuote}>
        Generate Quote
      </button>
      <h1>{text}</h1>
      <h3>{"Hello" + " Aravind"}</h3>
    </div>
  )
}
export default Quotes;