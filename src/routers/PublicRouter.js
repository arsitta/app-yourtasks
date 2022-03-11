import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { AppContext } from './MainRouter';
import { CreateAcountScreen } from '../components/CreateAcountScreen/CreateAcountScreen';
import { LoginAcountScreen } from '../components/LoginAcountScreen/LoginAcountScreen';

export const PublicRouter = () => {
  const [appData, dispatch] = useContext(AppContext);

  return appData.logged.state
    ?
    <Navigate to={'/'} />
    :
    <Routes>
      <Route path='/create' element={<CreateAcountScreen />} />
      <Route path='/create/*' element={<Navigate to='/login/create' />} />
      <Route path='/' element={<LoginAcountScreen />} />
      <Route path='/*' element={<Navigate to='/login' />} />
    </Routes>

}
