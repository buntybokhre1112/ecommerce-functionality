
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FeatureProduct from './component/FeatureProduct';
import Navbar from './component/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <FeatureProduct/>
      <Routes>
      <Route path='/navbar' element={<Navbar/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
