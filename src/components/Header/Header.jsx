import React from "react";
import "./Header.css";

const Header = React.memo(({ data }) => {
  const { title, highlightedWord, description } = data;
  return (
    <div className="app__header-container">
      <h1 className="headtext__roboto">
        {title}
        {highlightedWord ? (
          <span className="app__header-highlightedword">{highlightedWord}</span>
        ) : null}
      </h1>
      <p className="p__space-mono">{description}</p>
    </div>
  );
})
export default Header;
