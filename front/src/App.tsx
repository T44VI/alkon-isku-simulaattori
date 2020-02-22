import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Lander from './Lander';
import Host from './Host';
import Game from './Game';
import io from 'socket.io-client';
import { Drink, Drinklist } from './types';
import poraLogo from './kuvat/Pora_logo_white.png';
const socket = io('http://localhost:4000');

const App: React.FC = () => {
  const [failedConnect, setFailedConnect] = useState(false);
  const [drinks, setDrinks] = useState<Drinklist>({});

  useEffect(() => {
    socket.on('connected', () => {
      socket.emit('getDrinks');
      socket.emit('getScoreboard');
    });
  });

  useEffect(() => {
    socket.on('drinks', (data: Drinklist) => {
      setDrinks(data);
    });
  });

  const sendMes = () => {
    socket.emit('clicked');
  };

  const emitMes = (msg: string, data?: any) => {
    if (data) {
      socket.emit(msg, data);
    } else {
      socket.emit(msg);
    }
  };

  return (
    <div>
      <div className="bganim bganim1"></div>
      <div className="bganim bganim2"></div>
      <div className="bganim bganim3"></div>
      <div className="content">
        <div className="header">
          <img src={poraLogo} className="headerLogo" />
          <h1 className="headerText">Alkon isku -simulaattori</h1>
          <img src={poraLogo} className="headerLogo" />
        </div>
        <div className="innerContent">
          <Router>
            <Switch>
              <Route path="/host">
                <Host socket={socket} drinks={drinks} emitMes={emitMes} />
              </Route>
              <Route path="/game">
                <Game socket={socket} drinks={drinks} />
              </Route>
              <Route path="/">
                <Lander />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default App;
/*

const App: React.FC = () => {
  useEffect(() => {
    socket.on('message', (data: any) => {
      console.log(data);
      socket.emit('message', data);
    });
  });

  const sendMes = () => {
    socket.emit('clicked');
  };

  return (
    <div>
      <button onClick={sendMes}>Send Message</button>
    </div>
  );
};

export default App;*/
