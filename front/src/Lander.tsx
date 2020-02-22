import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

interface Props {}

const Lander: React.FC<Props> = (props: Props) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/host">Scoreboard</Link>
        </li>
        <li>
          <Link to="/game">Client</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Lander;
