import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "โค๏ธ": "red heart",
  "๐": "sparkling heart",
  "๐": "revolving hearts",
  "๐": "broken heart",
  "๐ค": "black heart",
  "๐": "heart with arrow",
  "๐": "purple heart",
  "๐": "couple with heart",
  "๐": "growing heart",
  "๐": "two hearts",
  "๐": "yellow-heart",
  "๐": "heart decoration",
  "๐": "heart with ribbon",
  "๐งก": "orange heart"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    // processing
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Such type of heart not found!";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>The HEART dictionary!โค๏ธ</h1>

      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>
      {/* Actual output is set here by React with the use of  useState */}

      <h3> Click on any one of this </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
