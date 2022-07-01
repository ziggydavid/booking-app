import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/apartments/List";
import Ap from "./pages/apartment/Ap";
import './assets/css/navbar.css';
import './assets/css/header.css'
import './assets/css/feature.css'
import './assets/css/home.css'
import './assets/css/pList.css'
import './assets/css/mailList.css'
import './assets/css/footer.css'
import './assets/css/list.css'
import './assets/css/searchList.css'
import './assets/css/apartment.css'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apartments" element={<List />} />
        <Route path="/apartment/:id" element={<Ap />} />
      </Routes>
    </div>
  );
}

export default App;
