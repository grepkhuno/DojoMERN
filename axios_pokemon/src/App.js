import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
function App() {
  const [list, setList] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
     .then((res) => {
        console.log(res)
        setList(res.data.results)
      }).catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
     
      {
        
        list.map((user) => (
         
            <ul className="list-group">
              <li className="list-group-item">
                <h1>{user.name} </h1>
              </li>
            </ul>
         

        ))
      }
   
    </div>
  );
}
export default App;
