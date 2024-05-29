import { Route, Routes } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Homepage, Pokemon } from '@/containers';
import '@/styles/app.scss';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:id" element={<Pokemon />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
};
