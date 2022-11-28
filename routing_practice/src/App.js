import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Hello from './components/Hello';
import Nav from './components/Nav';
import Num from './components/Num';
import ParamsPass from './components/ParamsPass';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/hello' element={<Hello/>}/>
        <Route path='/:num' element={<Num/>}/>
        <Route path='/:texto/:wordColor/:backGroung' element={<ParamsPass/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
