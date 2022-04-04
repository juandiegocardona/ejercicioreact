import React, { useEffect, useState } from 'react';
import Museo from './Museo';
const Museums = (prop) => {
  const [museums, setMuseums] = useState([]);

  useEffect(() => {
    const url = 'https://back-museums-uniandes.herokuapp.com/api/museums';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMuseums(data);
      });
  }, []);

  return (
    <div className="d-flex flex-wrap align-items-stretch">
      {museums.map((e, i) => (
        <Museo key={i} museum={e} onRedirect={prop.handleDetail} />
      ))}
    </div>
  );
};

export default Museums;
