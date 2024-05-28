import { Route, Routes } from 'react-router-dom';

import { Homepage, Pokemon } from '@/containers';
import '@/styles/app.scss';

export const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:id" element={<Pokemon />} />
      </Routes>
    </div>
  );
};
