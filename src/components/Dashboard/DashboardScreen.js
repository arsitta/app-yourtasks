import React, { useContext } from 'react'
import { AppContext } from '../../routers/MainRouter'
import { TaskList } from './TaskList';

export const DashboardScreen = () => {

  const [appData, dispatch, logged, setLogged, language, setLanguage] = useContext(AppContext);

  return (
    <>
      <div>DashboardScreen
        <h2>Hola {appData.database[appData.system.user].config.first}</h2>
        <h2>{appData.database[appData.system.user].config.last}</h2>

        <button onClick={() => {
          dispatch({ type: "deslogUser", payload: { user: "x" } })
          setLogged(false);
        }} > Deslogear </button>

      <button onClick={() => {
          dispatch( {type:"deleteUser", payload:{user:appData.system.user, newName:""}} );
          setLogged(false);
      }}> Eliminar </button>


        <h1>Index:{appData.system.user}</h1>
        <div className='dash__all-lists'>
          <TaskList />
          <TaskList />
          <TaskList />
          <TaskList />
        </div>
      </div>
    </>
  )
}
