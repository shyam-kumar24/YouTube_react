import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const searchCache = useSelector((store) => store.search)
  const dispatch = useDispatch()

  useEffect(() => {

    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery])
      }else {
        getSearchSuggestions()
      }
      
    },200)

    return () => {
      clearTimeout(timer)
    }
  },[searchQuery])

// React first runs the cleanup function from the previous effect before running the new effect.
// That’s why it clears the old timer before setting a new one, and only the last timer remains when the user 
// stops typing.

// How React Handles useEffect Execution
// When searchQuery updates, React first runs the cleanup function from the previous effect execution.
// Then, React runs the new effect and sets up the new timer.


  const getSearchSuggestions = async () => {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
      const json = await data.json()
      console.log(json[1]);
      setSuggestions(json[1])
      // update cache
      dispatch(cacheResults({
        [searchQuery] : json[1]
      }))

      // dispatch = useDispatch();
  }

  

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex  align-center col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10 mt-2 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr-cwMeLLj8MfIo3HoXJKFcOFB1g9U4DDMHA&s"
          alt=""
        />
        <a href="./">
          <img
            className="h-15"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
            alt=""
          />
        </a>
      </div>
      <div className="col-span-10 pt-4 ">
        <div>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            className="border-1 border-gray-500 h-8 rounded-l-full w-1/2 px-2"
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="h-8 border-1 border-gray-500 rounded-r-full px-4 bg-gray-100">
            Search
          </button>
        </div>
        {showSuggestions && <div className="fixed bg-white py-2 w-[31rem] shadow-lg rounded-lg border border-gray-100">
          <ul>
            {
              suggestions.map((s) => (
                <li className="py-2 px-2 shadow-sm hover:bg-gray-100" key={s} >🔍 {s}</li>
              ))
            }
            
          </ul>
        </div>}
      </div>
      <div className="col-span-1">
        <img
          className="h-10"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVR3TjkaFI32k7M8OGMye32jOxry45evTmjw&s"
          alt=""
        />
      </div>
    </div>
  );
};

export default Head;
