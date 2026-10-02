import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState({});

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "aofcd5541add57c0396398488b47at43";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}&_gl=1*1w60qyg*_up*MQ..*_ga*MTYyMTMzNDE0OS4xNzkwODYyOTg1*_ga_HB45F6ZNE6*czE3OTA4NjI5ODQkbzEkZzEkdDE3OTA4NjMwMjIkajIyJGwwJGgw`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
      {keyword}
      <Results results={results} />
    </div>
  );
}
