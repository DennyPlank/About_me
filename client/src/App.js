import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Portfolio from './Components/Pages/Portfolio';
import Layout from './Components/Layout';
import Contact from './Components/Pages/Contact';


function App() {
  return (
      <div id="appContainer">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Portfolio" element={<Portfolio />} />
          </Route>
        </Routes>
      </div>
  );
}

export default App;
