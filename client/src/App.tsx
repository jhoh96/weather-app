import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
// Page imports
import Main from "./pages/Main";
import ResultsPage from "./pages/ResultsPage"

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/results_page" element={<ResultsPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
