import React from "react";
import Auto_Complete from "./Auto_Complete";

function AutoComplete() {
  const staticData = [
    "apple",
    "banana",
    "berrl",
    "orange",
    "grape",
    "mango",
    "berry",
    "peach",
    "cherry",
    "plum",
  ];

  const fetchSuggest = async (query) => {
    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${query}`
    );
    if (!response.ok) {
      throw new Error("Network response was not Ok");
    }
    const result = await response.json();
    // await console.log(result);
    return result.recipes;
  };

  return (
    <>
      <h1>AutoComplete / TypeHead</h1>

      <Auto_Complete
        placeholder={"Enter Recipe"}
        staticData = {staticData}
        fetchSuggestions={fetchSuggest}
        dataKey={"name"}
        customLoading={<>Loading Recipes...</>}
        onSelect={(res) => console.log(res)}
        onChange={(input) => {}}
        onBlur={(e) => {}}
        onFocus={(e) => {}}
        customStyles={{}}
      />
      
    </>
  );
}

export default AutoComplete;
