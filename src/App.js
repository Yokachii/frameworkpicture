import './App.css';
import Main from './page/main/Main'
import Contact from './page/contact/Contact'
import Projets from './page/projets/Projets';

import ReactDOM from "react-dom/client";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (

    <BrowserRouter>
      <SpeedInsights />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projets" element={<Projets />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);