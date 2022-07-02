import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/lodges/List";
import Lodge from "./pages/lodge/Lodge";
import './assets/css/navbar.css';
import './assets/css/header.css'
import './assets/css/feature.css'
import './assets/css/home.css'
import './assets/css/pList.css'
import './assets/css/mailList.css'
import './assets/css/footer.css'
import './assets/css/list.css'
import './assets/css/searchList.css'
import './assets/css/lodge.css'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lodges" element={<List />} />
        <Route path="/lodge/:id" element={<Lodge />} />
      </Routes>
    </div>
  );
}

export default App;
