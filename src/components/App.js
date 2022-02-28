import React from "react";
import Header from "./Header"

import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header 
      name={blogData.name}
      />
    </div>
  );
}

export default App;
