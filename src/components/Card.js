import PropTypes from 'prop-types';
import React from 'react';
import lit from '../assets/images/lit.png';
import Pea from '../assets/images/Pea.png';
import phy from '../assets/images/phy.png';
import med from '../assets/images/med.png';
import eco from '../assets/images/eco.png';
import che from '../assets/images/che.png';

export const images = {
  lit,
  Pea,
  phy,
  med,
  eco,
  che,
};

const Card = (props) => {
  const { laureates } = props;
  const img = laureates.meta.nobelPrizeCategory;
  return (
    laureates.laureates.map((lau) => (
      <article key={lau.id} className="card">
        <div className="category-icon">
          <img src={images[img] || images.Pea} alt={img} />
        </div>
        <section className="category-date">
          <p>Date Awarded</p>
          <span className="divider" />
          <p>{lau.nobelPrizes[0].dateAwarded || lau.nobelPrizes[0].awardYear}</p>
        </section>
        <h3 className="category-name">{(lau.fullName && lau.fullName.en) || (lau.orgName.en)}</h3>
        <p>
          {'$ '}
          {lau.nobelPrizes[0].prizeAmount}
        </p>
        <section className="more-info">
          <p className="motivation">{lau.nobelPrizes[0].motivation.en}</p>
          <a href={lau.wikipedia.english} rel="noreferrer" target="_blank" className="wiki"><h5>More (wiki)</h5></a>
        </section>
      </article>
    ))
  );
};

Card.propTypes = {
  laureates: PropTypes.arrayOf(PropTypes.elementType).isRequired,
};

export default Card;
