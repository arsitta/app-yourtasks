import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { AppContext } from './MainRouter';
import { CreateAccountScreen } from '../components/CreateAccount/CreateAccountScreen';
import { LoginAccountScreen } from '../components/LoginAccount/LoginAccountScreen';
import { PublicScreen } from '../PublicScreen/PublicScreen';

export const PublicRouter = () => {
  const [appData, dispatch] = useContext(AppContext);

  return appData.system.logged
    ?
    <Navigate to={'/'} />
    :
    <PublicScreen>
      <Routes>
        <Route path='/create' element={<CreateAccountScreen />} />
        <Route path='/create/*' element={<Navigate to='/login/create' />} />
        <Route path='/' element={<LoginAccountScreen />} />
        <Route path='/*' element={<Navigate to='/login' />} />
      </Routes>
    </PublicScreen>
}
