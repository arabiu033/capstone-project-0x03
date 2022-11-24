import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchLaureates } from '../redux/space/laureatesSlice';
import { fieldLaureates } from '../redux/space/nobelSlice';

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
      <article type="button">
        <img alt="Icon" />
        <img alt="Field" />
        <h3>{field.name}</h3>
        <h3>{field.count}</h3>
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
