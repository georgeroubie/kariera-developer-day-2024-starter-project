import { useState } from 'react';
import Button from '../../shared/button/Button';
import styles from './SearchPokemonForm.module.css';

const INPUT_ID = 'pokemon_name_input';
const CHECKBOX_ID = 'accept_terms_checkbox';
const MIN_CHARACTERS = 3;

const SearchPokemonForm = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const isButtonDisabled = !acceptTerms;

  const handleOnSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
  };

  // const handleOnAccept = () => {
  //   setAcceptTerms(!acceptTerms);
  // };

  // const handleOnDecline = () => {
  //   setAcceptTerms(false);
  // }

  return (
    <form className={styles.form} onSubmit={handleOnSubmit}>
      <input
        id={INPUT_ID}
        value={pokemonName}
        type="text"
        autoComplete="off"
        placeholder="Search for a Pokemon..."
        required
        minLength={MIN_CHARACTERS}
        className={styles.input}
        onChange={(e) => setPokemonName(e.target.value)}
      />
      <p className={styles.errorMessage}>Pokemon name must be at least {MIN_CHARACTERS} characters long.</p>
      <div className={styles.checkboxWrapper}>
        <input
          type="checkbox"
          id={CHECKBOX_ID}
          name={CHECKBOX_ID}
          onChange={({ target }) => setAcceptTerms(target.checked)}
        />
        <label htmlFor={CHECKBOX_ID}>
          Accept&nbsp;
          <span>terms</span>
        </label>
      </div>
      <Button disabled={isButtonDisabled}>Search</Button>
    </form>
  );
};

export default SearchPokemonForm;
