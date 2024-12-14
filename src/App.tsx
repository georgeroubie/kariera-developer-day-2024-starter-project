import styles from './App.module.css';
import PokemonFinder from './components/pokemon-finder/PokemonFinder';

function App() {
  return (
    <div className={styles.wrapper}>
      <PokemonFinder />
    </div>
  );
}

export default App;
