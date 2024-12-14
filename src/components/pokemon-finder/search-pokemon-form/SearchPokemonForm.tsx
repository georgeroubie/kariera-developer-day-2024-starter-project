import { useRef, useState } from 'react';
import { api } from '../../../api/calls';
import { PokemonDataResponse } from '../../../api/types';
import Button from '../../shared/button/Button';
import PokemonDetails from '../pokemon-details/PokemonDetails';
import PokemonFinderTerms from '../pokemon-finder-terms-modal/PokemonFinderTermsModal';
import PokemonNamesDataList from '../pokemon-names-data-list/PokemonNamesDataList';
import styles from './SearchPokemonForm.module.css';

const INPUT_ID = 'pokemon_name_input';
const CHECKBOX_ID = 'accept_terms_checkbox';
const MIN_CHARACTERS = 3;
const LIST_ID = 'pokemon_name_list';

const SearchPokemonForm = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const [pokemonName, setPokemonName] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [pokemonData, setPokemonData] = useState<PokemonDataResponse | null>(null);

  const isButtonDisabled = !acceptTerms || isLoading;

  const showTerms = (ev: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    ev.preventDefault();
    ev.stopPropagation();
    dialogRef.current?.showModal();
  };

  const handleOnSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    if (isLoading) {
      return;
    }

    setIsLoading(true);
    setPokemonData(null);
    setHasError(false);

    api
      .getPokemonData(pokemonName)
      .then((data) => setPokemonData(data))
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false));
  };

  const handleOnAccept = () => {
    dialogRef.current?.close();
    setAcceptTerms(true);
  };

  const handleOnDecline = () => {
    dialogRef.current?.close();
    setAcceptTerms(false);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleOnSubmit}>
        <input
          id={INPUT_ID}
          list={LIST_ID}
          value={pokemonName}
          disabled={isLoading}
          type="text"
          autoComplete="off"
          placeholder="Search for a Pokemon..."
          required
          minLength={MIN_CHARACTERS}
          className={styles.input}
          onChange={(e) => setPokemonName(e.target.value)}
        />
        <PokemonNamesDataList id={LIST_ID} />
        <p className={styles.errorMessage}>Pokemon name must be at least {MIN_CHARACTERS} characters long.</p>
        <div className={styles.checkboxWrapper}>
          <input
            type="checkbox"
            id={CHECKBOX_ID}
            name={CHECKBOX_ID}
            disabled={isLoading}
            checked={acceptTerms}
            onChange={({ target }) => setAcceptTerms(target.checked)}
          />
          <label htmlFor={CHECKBOX_ID}>
            Accept&nbsp;
            <span onClick={showTerms}>terms</span>
          </label>
        </div>
        <Button disabled={isButtonDisabled}>Search</Button>
      </form>
      <PokemonFinderTerms dialogRef={dialogRef} onAccept={handleOnAccept} onDecline={handleOnDecline} />
      <PokemonDetails pokemonData={pokemonData} isLoading={isLoading} hasError={hasError} />
    </>
  );
};

export default SearchPokemonForm;
