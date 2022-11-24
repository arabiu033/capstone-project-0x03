import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchLaureates } from '../redux/space/laureatesSlice';
import { fieldLaureates } from '../redux/space/nobelSlice';
import { images } from './Card';
import arrow from '../assets/images/arrow.png';

const Field = (props) => {
  const { field, setTitle } = props;
  const dispatch = useDispatch();

  // Make necessary dispatches upon user click
  const handleClick = (id, count) => {
    setTitle(() => 'Laureates');
    dispatch(fieldLaureates([id, count]));
    dispatch(fetchLaureates({ id, count: count > 100 ? 50 : count }));
  };

  return (
    <Link to="/details" onClick={() => handleClick(field.id, field.count)}>
      <article type="button" className="field">
        <img src={arrow} alt="Field" className="field-arrow" />
        <img src={images[field.id]} alt="Icon" className="field-image" />
        <div className="field-detail">
          <h3 className="field-name">{field.name}</h3>
          <h3 className="field-count">{field.count}</h3>
        </div>
      </article>
    </Link>
  );
};

// PropTypes reqquired
Field.propTypes = {
  field: PropTypes.exact({
    id: PropTypes.string,
    name: PropTypes.string,
    count: PropTypes.number,
  }).isRequired,
  setTitle: PropTypes.func.isRequired,
};
export default Field;
