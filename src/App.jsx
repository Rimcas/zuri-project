// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Zuripro1 from "./Components/zuri-pro1";
import Contact from "./Components/contact/contacts.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
 return (  
  <div>
  <BrowserRouter>   
  <Routes>
    <Route path="/" element={<Zuripro1/>} />
    <Route path="/contact" element={<Contact/>} />
  </Routes>
  </BrowserRouter>
  
</div>
    )
   
}

export default App;
