import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNobel } from '../redux/space/nobelSlice';
import Field from '../components/Field';

let fetch = true;
const Homepage = (props) => {
  const dispatch = useDispatch();
  const { setTitle } = props;
  useEffect(() => {
    if (fetch) {
      dispatch(fetchNobel());
      fetch = false;
    }
  });
  const { categories } = useSelector((state) => ({ ...state.nobel }));
  return (
    <>
      <main>
        <div />
        <div>
          <h3>Nobel Prize</h3>
          <p>Laurettes</p>
        </div>
      </main>
      <h5>STATS BY FIELDS</h5>
      <ul>
        {categories.map((field) => <Field field={field} key={field.id} setTitle={setTitle} />)}
      </ul>
    </>
  );
};

Homepage.propTypes = {
  setTitle: PropTypes.func.isRequired,
};
export default Homepage;
