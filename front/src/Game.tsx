import React, { useEffect, useState } from 'react';
import { Drink, Drinklist, Result } from './types';
import Drinkput from './Drinkput';

interface Props {
  drinks: Drinklist;
  socket: SocketIOClient.Socket;
}

const drinkListHeader = (
  <tr>
    <th>#</th>
    <th>Tuote</th>
    <th>Vahvuus</th>
    <th>Tilavuus</th>
    <th>Alkoholin määrä</th>
    <th>Poista</th>
  </tr>
);

const getDrinkList = (score: Drink, index: number, removeIndex: (i: number) => void): JSX.Element => {
  return (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{score.name}</td>
      <td>{`${score.strength * 100}%`}</td>
      <td>{`${score.amount} litraa`}</td>
      <td>{`${Math.round(((score.amount * score.strength * 100) / 1.5) * 2) / 2}`}</td>
      <td className="poista" onClick={() => removeIndex(index)}>
        X
      </td>
    </tr>
  );
};

const getTotal = (score: Drink[]) => {
  if (score.length <= 1) {
    return;
  }
  const avg = score.reduce((acc, b) => acc + b.strength, 0) / score.length;
  const total = score.reduce((acc, b) => acc + b.amount, 0);
  const alc = score.reduce((acc, b) => acc + b.amount * b.strength, 0);
  return (
    <tr>
      <th>Total</th>
      <th></th>
      <th>{`AVG:${Math.round(avg * 1000) / 10}%`}</th>
      <th>{`${Math.round(total * 10) / 10} l`}</th>
      <th>{`${Math.round(((alc * 100) / 1.5) * 2) / 2}`}</th>
      <th></th>
    </tr>
  );
};

const Game: React.FC<Props> = (props: Props) => {
  const [currentScore, setCurrentScore] = useState<Drink[]>([]);
  const [teamName, setTeamName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [apiCallOnProcess, setApiCallOnProcess] = useState<boolean>(false);

  useEffect(() => {
    props.socket.on('confirmScore', () => {
      setApiCallOnProcess(false);
      setCurrentScore([]);
      setTeamName('');
    });
    props.socket.on('errorScore', () => {
      setApiCallOnProcess(false);
    });
  });

  const addToScore = (drink: Drink) => {
    setCurrentScore(currentScore.concat(drink));
  };

  const removeWithIndex = (index: number) => {
    setCurrentScore(currentScore.slice(0, index).concat(currentScore.slice(index + 1, currentScore.length)));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVal: string = event.target.value;
    setTeamName(newVal);
  };

  const getTeamScore = (): Result => ({
    name: teamName,
    drinkIds: currentScore.map((d: Drink): string => d.id),
  });

  const sendScore = () => {
    setApiCallOnProcess(true);
    props.socket.emit('sendScore', getTeamScore());
  };

  return (
    <div className="game">
      <table>
        {currentScore.length ? drinkListHeader : ''}
        {currentScore.map((drink: Drink, index: number) => getDrinkList(drink, index, removeWithIndex))}
        {getTotal(currentScore)}
      </table>
      <Drinkput drinks={props.drinks} addToScore={addToScore} />
      <div className="sendScore">
        <input
          className="teamInput"
          type="text"
          value={teamName}
          onChange={handleChange}
          placeholder="Syötä joukkueen nimi"
        />
        <div
          className={`confirmScore ${apiCallOnProcess || !teamName || !currentScore.length ? 'disabled' : ''}`}
          onClick={sendScore}
        >
          Lähetä
        </div>
      </div>
    </div>
  );
};

export default Game;
