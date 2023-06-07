import "./App.css";
import GuessNumberContainer from "./container/GuessNumberContainer";

function App() {
  return (
    <div className="App">
      <header className="main-header">
      <p className="top-content">Made with ❤️ by <a rel="noreferrer" target="_blank" href="https://github.com/yogeshktm">Yogeshwaran</a></p>
        GuessIt<p>Guess the random number between 1 to 100</p>
      </header>
      <GuessNumberContainer></GuessNumberContainer>
    </div>
  );
}

export default App;
