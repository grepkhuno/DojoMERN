import logo from './logo.svg';
import './App.css';
import Records from './components/Records';

function App() {
  return (
    <>
      <div className="App">
        <Records name={"Eliott"} lastName={"Morales"} hairColor={"bold"} age={40} />
        <Records name={"Martha"} lastName={"Morales"} hairColor={"bold"} age={32} />
        <Records name={"Carolina"} lastName={"Morales"} hairColor={"bold"} age={40} />
        <Records name={"Nicole"} lastName={"Morales"} hairColor={"bold"} age={19} />
      </div>
    </>
  );
}

export default App;
