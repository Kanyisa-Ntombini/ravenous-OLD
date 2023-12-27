import styles from './App.module.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

sessionStorage.clear();

function App() {
  return (
    <div>
      <header>
        <h1>Ravenous</h1>
        <div className={styles.FoodPic}></div>
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
