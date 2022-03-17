import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AppContext } from './MainRouter';
import { DashboardScreen } from '../components/Dashboard/DashboardScreen';
import { PrivateScreen } from '../PrivateScreen/PrivateScreen';

export const PrivateRouter = () => {
  const [appData, dispatch, logged, setLogged, language, setLanguage] = useContext(AppContext);

  return appData.system.logged
    ?
    <PrivateScreen>
      <Routes>
        <Route path="/*" element={<DashboardScreen />} />
      </Routes>
    </PrivateScreen>
    :
    <Navigate to={'/login'} />
}



