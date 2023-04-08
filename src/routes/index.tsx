import { Routes, Route, Navigate } from 'react-router-dom';
import { CompanyPage, LocalPage, Login } from '../pages';
import { RequireUser } from './requireUser';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Login />} />
      <Route element={<RequireUser />}>
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/local/:company_id" element={<LocalPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
