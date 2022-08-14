import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
// Page imports
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
