import React from "react";
import axios from "axios";
import {useState, useEffect} from "react";
import WordForm from "./WordForm.js";



const WordSearch = () => {
  const baseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  const [result, setResult] = useState([])
  const [word, setWord] = useState("")

 
  const searchString = `${baseUrl}/${word}`
 
  useEffect(() => {
    axios.get(searchString).then((response) => {
      setResult(response.data[0].meanings[0].definitions[0].definition);
    });
  }, []);

  // console.log(Object.keys(result))
  // console.log(result.meanings)
  


  return (<div>

    <WordForm cb={handleGetWord}/>
    {/* <b>{word}:</b>  {result}<br />  */}
    
     {word ? (word): ""}
    </div>

  )};


export default WordSearch;

