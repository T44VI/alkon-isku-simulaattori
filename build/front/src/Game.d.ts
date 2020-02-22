import React from 'react';
import { Drinklist } from './types';
interface Props {
    drinks: Drinklist;
    socket: SocketIOClient.Socket;
}
declare const Game: React.FC<Props>;
export default Game;
