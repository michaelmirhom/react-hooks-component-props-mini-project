import React from "react";
import ArticleList from "./ArticleList";


function Article(props) {
    const { title, date, preview, minutes } = props;
  
    const calculateEmojis = (minutes) => {
      const coffeeCup = "☕️";
      const bentoBox = "🍱";
      const emojiPerUnit = minutes < 30 ? 5 : 10;
      const emoji = minutes < 30 ? coffeeCup : bentoBox;
      const emojiCount = Math.ceil(minutes / emojiPerUnit);
      return emoji.repeat(emojiCount);
    };
  
    return (
      <article>
        <h3>{title}</h3>
        <small>{date || "January 1, 1970"}</small>
        <p>{preview}</p>
        {minutes && (
          <span>
            {calculateEmojis(minutes)} {minutes} min read
          </span>
        )}
      </article>
    );
  }
  export default Article;
  