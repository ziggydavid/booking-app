import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/home/Home";
import List from "./pages/hotels/List";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hotels" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
