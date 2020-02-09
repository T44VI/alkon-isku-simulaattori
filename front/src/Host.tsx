import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

interface Props {
  setFailedConnect: (arg0: boolean) => void;
  socket: SocketIOClient.Socket;
}

const Host: React.FC<Props> = (props: Props) => {
  const [amount, setAmount] = useState(false);
  const add1 = () => {
    props.setFailedConnect(true);
    setAmount(true);
  };
  return (
    <div onClick={add1}>
      Jaahas
      {amount ? <Redirect to="/"></Redirect> : ''}
    </div>
  );
};

export default Host;
