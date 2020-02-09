import React, { useEffect, useState } from 'react';

interface Props {
  failedConnect: boolean;
}

const Lander: React.FC<Props> = (props: Props) => {
  const { failedConnect } = props;

  return failedConnect ? <p>connection failed</p> : <p>connect</p>;
};

export default Lander;
