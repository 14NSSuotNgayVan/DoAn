import './App.css';

import axios from "axios";
import { useEffect, useState } from 'react';
import Login from './components/Login';
import Navbar from "./components/Navbar.js"
import Sidebar from "./components/Sidebar.js"
import Homepage from "./components/Homepage.js"
function App() {
   
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [size, setSize] = useState(3)
  const [totalPage, setTotalPage] = useState(0)
  
  const token = localStorage.getItem("token");

  return (
    <div>
      <Homepage/>
    </div>
  );
}

export default App;
