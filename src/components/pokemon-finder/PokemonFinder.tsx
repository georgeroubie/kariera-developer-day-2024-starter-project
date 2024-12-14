import Accordion from '../shared/accordion/Accordion';
import PageTitle from '../shared/page-title/PageTitle';
import SubTitle from '../shared/sub-title/SubTitle';
import { FAQ } from './constants';

const PokemonFinder = () => {
  return (
    <>
      <PageTitle pageTitle="Home" />
      <SubTitle>Search your favorite Pokemon here!</SubTitle>
      <Accordion items={FAQ} />
    </>
  );
};

export default PokemonFinder;
