import { Route, Routes } from 'react-router';
import { useState } from 'react';
import Header from './components/Header';
import Homepage from './pages/Hompage';
import Details from './pages/Details';

function App() {
  const [title, setTitle] = useState('Categories');
  return (
    <>
      <Header title={[title, setTitle]} />
      <Routes>
        <Route path="/" element={<Homepage setTitle={setTitle} />} />
        <Route path="/details" element={<Details />} />
        <Route path="/profile" element={<></>} />
      </Routes>
    </>
  );
}

export default App;
