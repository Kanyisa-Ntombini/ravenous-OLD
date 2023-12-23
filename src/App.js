import './App.css';
import { BusinessList, SearchBar } from './components';

function App() {
  return (
    <div className="app">
      <header>
        <h1>Ravenous</h1>
        <div className="food-pic"></div>
      </header>
      <main>
        <SearchBar />
        <BusinessList />
      </main>
      <footer>&copy; 2023 K Ntombini</footer>
    </div>
  );
}

export default App;
