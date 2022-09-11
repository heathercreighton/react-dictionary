import React from "react";
import "./style.css";
import WordSearch from "./components/WordSearch.js"

const wordList = ["angry", "nonsense", "infatuation", "competition"]

export default function App() {
  return (
    <div>
      {wordList.map( w => <WordSearch word={w} />)}
      
     

  
    </div>
  );
}
