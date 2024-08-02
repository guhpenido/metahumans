import "./App.css";
import React from "react";
import MetahumansList from "../metahumans/metahumanslist";

function App() {
  return (
    <>
      <div className="container">
        <h1 id="main-title">
          Metahumans <span>Fight</span>
        </h1>
        <h3>Select two metahumans to create a battle.</h3>
        <div className="main">
          <MetahumansList />
        </div>
      </div>
      <div className="footer">
        <h3>Created by Gustavo Penido with ❤ for Azapfy</h3>
      </div>
    </>
  );
}

export default App;
