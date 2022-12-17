import './App.css';
import Form from './components/Form';
import  AddAuthor  from './components/AddAuthor';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import AuthorsList from './components/AuthorsList';
import Nav from './components/Nav';
import UpdateAuthor from './components/UpdateAuthor';

function App() {
  return (
    <div className="App">


     
<BrowserRouter> <Nav />
<Routes>
<Route path='/getAllAuthors' element={<AuthorsList />}/>
<Route path='/addAuthor' element={<AddAuthor />}/>
<Route path='/getAuthorByID/:id' element={<UpdateAuthor />}/>

</Routes>
</BrowserRouter>

      {/* <AuthorsList /> */}
    </div>
  );
}

export default App;
