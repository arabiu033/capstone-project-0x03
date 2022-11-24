import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchLaureates } from '../redux/space/laureatesSlice';

let fetch = true;
const Form = () => {
  const [filter, setFilter] = useState({
    id: 'che', count: 50, to: 1951, from: 1901,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (fetch) {
      dispatch(fetchLaureates(filter));
      fetch = false;
    }
  });
  const handleChange = (e) => {
    setFilter((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (+filter.to > 2022) return;
    if (+filter.from < 1901) return;
    dispatch(fetchLaureates(filter));
  };
  return (
    <form name="filte" onSubmit={handleSubmit}>
      <label htmlFor="year">
        <span>Category </span>
        <select name="id" id="category" onChange={handleChange}>
          <option value="phy">Physics</option>
          <option value="che" defaultValue={filter.id}>Chemistry</option>
          <option value="eco">Economics</option>
          <option value="med">Medicine</option>
          <option value="Pea">Peace</option>
          <option value="lit">Literature</option>
        </select>
      </label>
      <label htmlFor="year">
        <span>Year From (min 1901) </span>
        <input type="text" id="" value={filter.from} name="from" onChange={handleChange} />
      </label>
      <label htmlFor="year">
        <span>Year To (max 2022) </span>
        <input type="text" id="" value={filter.to} name="to" onChange={handleChange} />
      </label>
      <button type="submit">Filtered</button>
    </form>
  );
};

export default Form;
