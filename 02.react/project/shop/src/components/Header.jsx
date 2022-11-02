import React from "react";

function Header() {
  return (
    <header>
      <div className="header__container">
        <div className="title">Awesome Prototype in shop</div>
        <div className="subtitle">
          subtitle subtitle subtitle subtitle subtitle subtitle subtitle
          subtitle subtitle subtitle subtitle subtitle
        </div>
        <div className="btn__area">
          <a href="https://www.protopie.io" target="_blank" rel="noreferrer">
            <button>Try Yourself</button>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
