import { PokemonDataResponse } from '../../../api/types';
import styles from './PokemonDetails.module.css';

type Props = {
  pokemonData?: PokemonDataResponse | null;
  hasError?: boolean;
  isLoading?: boolean;
};

const PokemonDetails = ({ pokemonData, isLoading, hasError }: Props) => {
  if (hasError) {
    return <div className={styles.error}>No pokemon found</div>;
  }

  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (!pokemonData) {
    return;
  }

  return (
    <div className={styles.pokemon}>
      <img src={pokemonData.sprites.front_default} width={80} height={80} alt={pokemonData.name} />
      <div>
        <p className={styles.name}>
          <strong>Name:</strong> {pokemonData.name}
        </p>
        <p className={styles.types}>
          <strong>Types:</strong> {pokemonData.types.map((typeData) => typeData.type.name).join(', ')}
        </p>
      </div>
    </div>
  );
};

export default PokemonDetails;
