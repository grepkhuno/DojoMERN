// import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import ProductList from './components/ProductList';
import NavBar from './components/NavBar';
import OneProduct from './components/OneProduct';
import UpdateProduct from './components/UpdateProduct';
import {BrowserRouter, Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/form' element={<Form/>}/>
        <Route path='/productlist' element={<ProductList/>} />
        <Route path='/getProductByID/:id' element={<OneProduct/>} />
        <Route path='/editProduct/:id' element={<UpdateProduct/>} />

      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
