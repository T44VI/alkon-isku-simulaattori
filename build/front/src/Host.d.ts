import React from 'react';
import { Drinklist } from './types';
interface Props {
    drinks: Drinklist;
    socket: SocketIOClient.Socket;
    emitMes: (a: string, b?: any) => void;
}
declare const Host: React.FC<Props>;
export default Host;
