import logo from "./logo.svg";
import "./App.css";
import "./styles/styles.css";
import Location from "./components/Location";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test 33333<code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Location />
      <div>Weather forcast</div>
    </div>
  );
}

export default App;
