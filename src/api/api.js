import axios from 'axios';

const API = axios.create({ baseURL: 'https://api.nobelprize.org/2.1/' });

// Return the api of specific fields
export const getField = (field) => API.get(`/nobelPrizes?nobelPrizeCategory=${field}`);

// Return the api of a particular category
export const getLaureates = (id, count) => API.get(`laureates?limit=${count}&nobelPrizeCategory=${id}`);

// Formualate the categories data
const getCategories = async () => {
  const fields = ['phy', 'lit', 'eco', 'che', 'Pea', 'med'];
  const categories = {
    phy: 'Physics',
    eco: 'Economincs',
    Pea: 'Peace',
    med: 'Medicine',
    che: 'Chemistry',
    lit: 'Literature',
  };
  let res;

  const nobelCategoies = fields.map(async (f) => {
    res = await getField(f);
    return ({
      id: f, name: categories[f], count: res.data.meta.count,
    });
  });

  return (await Promise.all(nobelCategoies)).slice(0, fields.length);
};

export default getCategories;
