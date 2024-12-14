import Accordion from '../shared/accordion/Accordion';
import PageTitle from '../shared/page-title/PageTitle';
import SubTitle from '../shared/sub-title/SubTitle';
import { FAQ } from './constants';
import SearchPokemonForm from './search-pokemon-form/SearchPokemonForm';

const PokemonFinder = () => {
  return (
    <>
      <PageTitle pageTitle="Home" />
      <SubTitle>Search your favorite Pokemon here!</SubTitle>
      <Accordion items={FAQ} name="faq" />
      <SearchPokemonForm />
    </>
  );
};

export default PokemonFinder;
