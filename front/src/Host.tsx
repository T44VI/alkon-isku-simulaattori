import React, { useEffect, useState } from 'react';
import { Drink, Drinklist, Scoreboard, ScoreboardScore } from './types';
import AnimateOnChange from 'react-animate-on-change';

interface Props {
  drinks: Drinklist;
  socket: SocketIOClient.Socket;
  emitMes: (a: string, b?: any) => void;
}

interface CounterProps {
  end: number;
  start: number;
  name: string;
}

interface TableProps {
  numbers: boolean;
  data: any[];
  labels?: Record<string, string>;
  className?: string;
}

const templateScoreBoard: Scoreboard = {
  litrat: 0,
  annokset: 0,
  tuotteet: 0,
  top: [],
  topJuomat: [],
  last: { name: 'Ei vielä raittiusritareita :D', drinkIds: [] },
};

const MyCounter = (props: CounterProps) => {
  console.log(props, props.end !== props.start);
  return (
    <AnimateOnChange baseClassName="counter" animationClassName="counter-flash" animate={props.end !== props.start}>
      <span className="counterOtsikko">{props.name}</span>
      <span className="counterCounter">{props.end}</span>
    </AnimateOnChange>
  );
};

const MyTable = (props: TableProps) => {
  const { numbers, data, labels } = props;
  if (data.length === 0) return <div>no data</div>;
  const keys = Object.keys(data[0]);
  const headers = (
    <tr className="hostRow">
      {(numbers ? [<th className="hostHeader">#</th>] : []).concat(
        keys.map(key => (labels && labels[key] ? <th className="hostHeader">{labels[key]}</th> : <th>{key}</th>))
      )}
    </tr>
  );

  const rows = data.map((row, i) => (
    <tr className="hostRow">
      {(numbers ? [<td className="hostCell">{i + 1}</td>] : []).concat(
        keys.map(key => <td className="hostCell">{row[key]}</td>)
      )}
    </tr>
  ));

  return (
    <table className={props.className + ' hostTable' || 'hostTable'}>
      {headers}
      {rows}
    </table>
  );
};

const Host: React.FC<Props> = (props: Props) => {
  const [oldAnnokset, setOldAnnokset] = useState(0);
  const [oldJuomat, setOldJuomat] = useState(0);
  const [oldLitrat, setOldLitrat] = useState(0);
  const [scoreboard, setScoreboard] = useState<Scoreboard>(templateScoreBoard);

  const updateScoreboad = (sb: Scoreboard) => {
    setOldAnnokset(scoreboard.annokset);
    setOldJuomat(scoreboard.tuotteet);
    setOldLitrat(scoreboard.litrat);
    setScoreboard(sb);
  };

  const updateWithSelf = () => {
    updateScoreboad(scoreboard);
  };

  useEffect(() => {
    props.socket.on('setScoreboard', (data: Scoreboard) => {
      console.log(data);
      updateScoreboad(data);
    });
  });

  const lastMapped = scoreboard.last.drinkIds.map(row => props.drinks[row]);
  const lastScores = {
    litrat: Math.round(lastMapped.reduce((acc, j) => acc + j.amount, 0) * 10) / 10,
    annokset: Math.round((lastMapped.reduce((acc, j) => acc + j.strength * j.amount, 0) * 100) / 1.5),
    tuotteet: lastMapped.length,
  };

  return (
    <div>
      <div className="hostMain">
        <div className="hostMainCell">
          <MyTable
            data={scoreboard.top}
            numbers={true}
            labels={{ name: 'Nimi', annokset: 'Annokset', litrat: 'Litrat', tuotteet: 'Tuotteiden lkm' }}
          />
        </div>
        <div className="hostMainCell">
          <MyTable
            data={scoreboard.topJuomat
              .map(row => ({ kerrat: row.amount, ...props.drinks[row.id] }))
              .map(row => ({ nimi: row.name, amount: row.amount, strength: row.strength, kerrat: row.kerrat }))}
            numbers={true}
            labels={{ nimi: 'Tuotteen nimi', amount: 'Määrä', strength: 'Vahvuus', kerrat: 'Ostojen lkm' }}
          />
        </div>
        <div className="hostMainCell">
          <h2 className="lastResult">
            <u>Viimeisin tulos</u>
          </h2>
          <h3 className="lastName">{scoreboard.last.name}</h3>
          <table className="lastTable">
            <tr>
              <td className="lastLabel">Annokset</td>
              <td className="lastVal">{lastScores.annokset}</td>
            </tr>
            <tr>
              <td className="lastLabel">Litrat</td>
              <td className="lastVal">{lastScores.litrat}</td>
            </tr>
            <tr>
              <td className="lastLabel">Tuotteiden lkm</td>
              <td className="lastVal">{lastScores.tuotteet}</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="TopCounter">
        <MyCounter end={scoreboard.litrat} name="Litrat" start={oldLitrat} />
        <MyCounter end={scoreboard.annokset} name="Annokset" start={oldAnnokset} />
        <MyCounter end={scoreboard.tuotteet} name="Juomat" start={oldJuomat} />
      </div>
    </div>
  );
};

export default Host;
