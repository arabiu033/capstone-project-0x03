import axios from 'axios';

const API = axios.create({ baseURL: 'https://api.nobelprize.org/2.1/' });

// Return the api of specific fields
export const getPhy = () => API.get('/nobelPrizes?nobelPrizeCategory=phy');
export const getMed = () => API.get('/nobelPrizes?nobelPrizeCategory=med');
export const getLit = () => API.get('/nobelPrizes?nobelPrizeCategory=lit');
export const getEco = () => API.get('/nobelPrizes?nobelPrizeCategory=eco');
export const getChe = () => API.get('/nobelPrizes?nobelPrizeCategory=che');
export const getPea = () => API.get('/nobelPrizes?nobelPrizeCategory=Pea');

// Return the api of a particular category
export const getLaureates = (id, count) => API.get(`laureates?limit=${count}&nobelPrizeCategory=${id}`);

// Formualate the categories data
const getCategories = async () => {
  const nobelCategoies = [];
  let res;

  res = await getChe();
  nobelCategoies.push({ id: 'che', name: 'Chemistry', count: res.data.meta.count });
  res = await getPhy();
  nobelCategoies.push({ id: 'phy', name: 'Physics', count: res.data.meta.count });
  res = await getMed();
  nobelCategoies.push({ id: 'med', name: 'Medicine', count: res.data.meta.count });
  res = await getLit();
  nobelCategoies.push({ id: 'lit', name: 'Literature', count: res.data.meta.count });
  res = await getEco();
  nobelCategoies.push({ id: 'eco', name: 'Economics', count: res.data.meta.count });
  res = await getPea();
  nobelCategoies.push({ id: 'pea', name: 'Peace', count: res.data.meta.count });

  return nobelCategoies;
};

export default getCategories;
