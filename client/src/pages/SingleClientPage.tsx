import React from 'react';
import { useParams } from 'react-router-dom';

const SingleClientPage = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <div>
      <h1>{name}</h1>
      <p>Details about {name}...</p>
    </div>
  );
};

export default SingleClientPage;
