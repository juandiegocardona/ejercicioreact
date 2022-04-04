import React, { useState } from 'react';
import Obra from './Obra';
import './Museo';

const detalleMuseo = (prop) => {
  console.log(prop);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [obras] = useState(prop.selectedMuseum);
  return (
    <div>
      {obras.map((e, i) => (
        <Obra key={i} obra={e} />
      ))}
    </div>
  );
};
export default detalleMuseo;
