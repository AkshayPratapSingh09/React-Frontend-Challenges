import React, { useEffect, useState } from "react";

const Auto_Complete = ({
  // staticData,
  fetchSuggestions,
  placeholder = "",
  customloading = "Loading...",
  // caching = true,
  onSelect = () => {},
  onBlur = () => {},
  onFocus = () => {},
  onChange = () => {},
  customStyles = {},
  dataKey = "",
}) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // console.log(error);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    onChange(event.target.value);
  };

  const getSuggestions = async (query) => {
    setError(null);
    setLoading(true);
    console.log("here 3");
    try {
      let result;
      console.log("here 4");
      // if (staticData) {
      //   console.log("here 5");
      //   result = staticData.filter((item) => {
      //     return item.toLowerCase().includes(query.toLowerCase());
      //   });
      // }
      result = await fetchSuggestions(query);
        console.log(result);
      
      // setCache(query, result);
      setSuggestions(result);
    } catch (error) {
      console.log(error);
      setError("Failed to fetch  suggestions");
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  

  useEffect(() => {
    if (inputValue.length > 1) {
      console.log("here");
      // setTimeout(getSuggestions(inputValue),5000)
      setTimeout(() => {
        getSuggestions(inputValue); // This function will be executed after the delay
      }, 2000);
      console.log("here 2");
    } else {
      setSuggestions([]);
    }
  }, [inputValue]);

  return (
    <div className="container">
      <input
        type="text"
        value={inputValue}
        placeholder={placeholder}
        style={customStyles}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={handleInputChange}
      />
      { suggestions.map((sug)=>{
        return <div className="sug">{sug.name}</div>
      })}
    </div>
  );
};

export default Auto_Complete;
