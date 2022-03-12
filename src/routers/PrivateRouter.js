import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AppContext } from './MainRouter';
import { DashboardScreen } from '../components/Dashboard/DashboardScreen';

export const PrivateRouter = () => {
  const [appData, dispatch] = useContext(AppContext);

  return appData.system.logged
    ?
    <Routes>
      <Route path="/*" element={<DashboardScreen />} />
    </Routes>
    :
    <Navigate to={'/login'} />
}



