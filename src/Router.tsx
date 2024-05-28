import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Login } from './pages/Login';
import { FeedGeral } from './pages/FeedGeral';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Login />} />
      </Route>
      <Route path="/feed" element={<FeedGeral />} />
    </Routes>
  );
}
