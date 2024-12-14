import { ReactElement, useEffect, useState } from 'react';
import { api } from '../../../api/calls';

type Props = {
  id: string;
};

const PokemonNamesDataList = ({ id }: Props): ReactElement => {
  const [names, setNames] = useState<string[]>([]);

  useEffect(() => {
    api
      .getAllPokemonNames()
      .then((data) => setNames(data.results.map((result) => result.name)))
      .catch(() => setNames([]));
  }, []);

  return (
    <datalist id={id}>
      {names.map((name, index) => (
        <option key={`${name}_${index}`} value={name} />
      ))}
    </datalist>
  );
};

export default PokemonNamesDataList;
