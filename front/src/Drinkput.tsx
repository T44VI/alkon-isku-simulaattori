import React, { useEffect, useState } from 'react';
import { Drink, Drinklist } from './types';

interface Props {
  drinks: Drinklist;
  addToScore: (a: Drink) => void;
}

const Drinkput = (props: Props) => {
  const [value, setValue] = useState<string>('');
  const { drinks, addToScore } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVal: string = event.target.value;
    if (drinks[newVal]) {
      addToScore(drinks[newVal]);
      setValue('');
    } else {
      setValue(newVal);
    }
  };

  return (
    <div className="drinkputWpr">
      <input className="drinkput" type="text" value={value} onChange={handleChange} placeholder="Syötä koodi" />
    </div>
  );
};

export default Drinkput;
