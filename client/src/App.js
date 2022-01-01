import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Components/Pages/Home';
import Protected from './Components/Pages/Protected';
import Public from './Components/Pages/Public';
import Layout from './Components/Layout';


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/protected" element={<Protected />} />
      <Route path="/public" element={<Public />} />
      </Route>
    </Routes>
  );
}

export default App;
