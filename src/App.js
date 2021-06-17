import "./App.css";
import GuessNumberContainer from "./container/GuessNumberContainer";

function App() {
  return (
    <div className="App">
      <header className="main-header">
        GuessIt<p>Guess the random number between 1 to 100</p>
      </header>
      <GuessNumberContainer></GuessNumberContainer>
    </div>
  );
}

export default App;
