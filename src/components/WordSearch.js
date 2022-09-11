import React from "react";
import axios from "axios";
import {useState, useEffect} from "react";


const WordSearch = ({word}) => {
  const baseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  const [result, setResult] = useState([])
  let searchString = `${baseUrl}${word}`


  useEffect(() => {
    axios.get(searchString).then((response) => {
      // console.log(response.data[0])
      // console.log(response.data[0].word)
      // console.log(response.data[0].meanings.map(m => m.definitions[0].definition))
      setResult(response.data[0].meanings[0].definitions[0].definition);
    });
  }, []);

  console.log(Object.keys(result))
  console.log(result.meanings)

  return (<div>
    <b>{word}:</b>  {result}<br /></div>

  )};


export default WordSearch;

