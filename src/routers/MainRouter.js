import React, { createContext, useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { appDataReducer, initAppDataReducer } from '../reducers/userReducer';
import { PublicRouter } from './PublicRouter';
import { PrivateRouter } from './PrivateRouter';


export const AppContext = createContext();


export const MainRouter = () => {

  const [appData, dispatch] = useReducer(appDataReducer, {}, initAppDataReducer);

  useEffect(() => {
    localStorage.setItem('app-yourtasks', JSON.stringify(appData));
  }, [appData])

  return (
    <AppContext.Provider value={[appData, dispatch]}>
      <Router>
        <Routes>
          <Route path="/login/*" element={<PublicRouter />} />
          <Route path="/*" element={<PrivateRouter />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  )

}
