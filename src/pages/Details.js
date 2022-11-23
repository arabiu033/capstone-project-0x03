import React from 'react';
import { useSelector } from 'react-redux';

const Details = () => {
  const { laureates, loading } = useSelector((state) => ({ ...state.laureates }));
  if (loading === 'Loading Api') return (<></>);

  const laureat = laureates.laureates;
  return (
    laureat.map((lau) => (
      <article key={lau.id}>
        <div>LogoImage</div>
        <div>
          <p>Date Awarded</p>
          <span>.</span>
          <p>{lau.nobelPrizes[0].dateAwarded}</p>
        </div>
        <h3>{(lau.fullName && lau.fullName.en) || (lau.orgName.en)}</h3>
        <p>{lau.nobelPrizes[0].prizeAmount}</p>
        <div>
          <a href={lau.wikipedia.english}><h4>Wikipedia</h4></a>
          <button type="button">Motivation</button>
        </div>
      </article>
    ))
  );
};

export default Details;
