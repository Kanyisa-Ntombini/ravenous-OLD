import styles from './App.module.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import foodBusinessImage from './food-business-image-1.jpg';

const arrOfBusinesses = [
  {
    imageSrc: foodBusinessImage,
    name: "Kanyi's Corner",
    address: '122 Sunnyhill Street',
    city: 'Fairy Town',
    state: 'Fairytale Land',
    zipCode: 8888,
    category: 'lacto-ovo vegetarian',
    rating: 4.8,
    reviewCount: 120,
  },
  {
    imageSrc: foodBusinessImage,
    name: "Kanyi's Corner",
    address: '122 Sunnyhill Street',
    city: 'Fairy Town',
    state: 'Fairytale Land',
    zipCode: 8888,
    category: 'lacto-ovo vegetarian',
    rating: 4.8,
    reviewCount: 120,
  },
  {
    imageSrc: foodBusinessImage,
    name: "Kanyi's Corner",
    address: '122 Sunnyhill Street',
    city: 'Fairy Town',
    state: 'Fairytale Land',
    zipCode: 8888,
    category: 'lacto-ovo vegetarian',
    rating: 4.8,
    reviewCount: 120,
  },
  {
    imageSrc: foodBusinessImage,
    name: "Kanyi's Corner",
    address: '122 Sunnyhill Street',
    city: 'Fairy Town',
    state: 'Fairytale Land',
    zipCode: 8888,
    category: 'lacto-ovo vegetarian',
    rating: 4.8,
    reviewCount: 120,
  },
  {
    imageSrc: foodBusinessImage,
    name: "Kanyi's Corner",
    address: '122 Sunnyhill Street',
    city: 'Fairy Town',
    state: 'Fairytale Land',
    zipCode: 8888,
    category: 'lacto-ovo vegetarian',
    rating: 4.8,
    reviewCount: 120,
  },
  {
    imageSrc: foodBusinessImage,
    name: "Kanyi's Corner",
    address: '122 Sunnyhill Street',
    city: 'Fairy Town',
    state: 'Fairytale Land',
    zipCode: 8888,
    category: 'lacto-ovo vegetarian',
    rating: 4.8,
    reviewCount: 120,
  },
  {
    imageSrc: foodBusinessImage,
    name: "Kanyi's Corner",
    address: '122 Sunnyhill Street',
    city: 'Fairy Town',
    state: 'Fairytale Land',
    zipCode: 8888,
    category: 'lacto-ovo vegetarian',
    rating: 4.8,
    reviewCount: 120,
  },
  {
    imageSrc: foodBusinessImage,
    name: "Kanyi's Corner",
    address: '122 Sunnyhill Street',
    city: 'Fairy Town',
    state: 'Fairytale Land',
    zipCode: 8888,
    category: 'lacto-ovo vegetarian',
    rating: 4.8,
    reviewCount: 120,
  },
  {
    imageSrc: foodBusinessImage,
    name: "Kanyi's Corner",
    address: '122 Sunnyhill Street',
    city: 'Fairy Town',
    state: 'Fairytale Land',
    zipCode: 8888,
    category: 'lacto-ovo vegetarian',
    rating: 4.8,
    reviewCount: 120,
  },
];

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
        <BusinessList arrOfBusinesses={arrOfBusinesses} />
      </main>
      <footer>&copy; 2023 K Ntombini</footer>
    </div>
  );
}

export default App;
