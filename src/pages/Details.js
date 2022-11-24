import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../components/Spinner';
import Card from '../components/Card';

const Details = () => {
  const { laureates, loading } = useSelector((state) => ({ ...state.laureates }));
  if (loading === 'Loading Api') return (<Spinner />);
  return (
    <div className="laureates">
      <Card laureates={laureates} />
    </div>
  );
};

export default Details;
