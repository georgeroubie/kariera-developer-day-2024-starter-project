import Button from '../../shared/button/Button';
import styles from './SearchPokemonForm.module.css';

const CHECKBOX_ID = 'accept_terms_checkbox';

const SearchPokemonForm = () => {
  return (
    <form className={styles.form}>
      <input placeholder="Search for a Pokemon..." className={styles.input} />
      <div className={styles.checkboxWrapper}>
        <input type="checkbox" id={CHECKBOX_ID} name={CHECKBOX_ID} />
        <label htmlFor={CHECKBOX_ID}>
          Accept&nbsp;
          <span>terms</span>
        </label>
      </div>
      <Button>Search</Button>
    </form>
  );
};

export default SearchPokemonForm;
