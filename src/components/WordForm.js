import React from "react";
import {useState} from "react";

const WordForm = ({cb}) => {
  const [searchWord, setSearchWord] = useState("")
  console.log(searchWord)

  return(
    <form label="wordForm">
      <input type="text" placeholder="Enter a word" onChange={(e) => {
            setSearchWord(e.target.value);
          }}></input>
      <button type="submit" onClick={() => cb(searchWord)}>Enter</button>
    </form>  
  )
}

export default WordForm;