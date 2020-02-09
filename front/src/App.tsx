import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Lander from './Lander';
import Host from './Host';
import Game from './Game';
import io from 'socket.io-client';
const socket = io('http://localhost:4000');

const App: React.FC = () => {
  const [failedConnect, setFailedConnect] = useState(false);

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
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/host">Host</Link>
          </li>
          <li>
            <Link to="/game">Game</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/host">
          <Host setFailedConnect={setFailedConnect} socket={socket} />
        </Route>
        <Route path="/game">
          <Game setFailedConnect={setFailedConnect} />
        </Route>
        <Route path="/">
          <Lander failedConnect={failedConnect} />
        </Route>
      </Switch>
    </Router>
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
