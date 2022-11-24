import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../components/Spinner';
import { fetchNobel } from '../redux/space/nobelSlice';
import Details from './Details';
import Field from '../components/Field';
import nobel from '../assets/images/nobel.png';
import Form from '../components/Form';

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

  const { categories, loading } = useSelector((state) => ({ ...state.nobel }));
  if (loading === 'Loading Api') return (<Spinner />);
  const total = categories.reduce((t, n) => t + n.count, 0);
  return (
    <>
      <main>
        <div>
          <img src={nobel} alt="nobel" className="nobel-image" />
        </div>
        <div>
          <h3>Nobel Prize</h3>
          <p>
            {total}
            {' '}
            Laureates
          </p>
        </div>
      </main>
      <h5 className="dhead stats">STATS BY FIELDS</h5>
      <ul className="categories">
        {categories.map((field) => <Field field={field} key={field.id} setTitle={setTitle} />)}
      </ul>
      <Form />
      <Details />
    </>
  );
};

Homepage.propTypes = {
  setTitle: PropTypes.func.isRequired,
};
export default Homepage;
