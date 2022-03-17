import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { AppContext } from '../routers/MainRouter'

export const PublicConfigBar = () => {

  const [appData, dispatch, logged, setLogged, language, setLanguage] = useContext(AppContext);

  const setColorMode = () => {
    dispatch({ type: "setColorMode" });
  }

  const changeLanguage = (lan) => {
    setLanguage(lan);
  }


  return (

    <div className='public__config-bar'>

      {
        (language == "ES") ?
          <div onClick={() => changeLanguage("EN")} style={{ cursor: "pointer", width: "30px", height: "30px", marginRight: "5px", display: "flex", justifyContent: "center", alignItems: "center" }}>ES</div>
          :
          <div onClick={() => changeLanguage("ES")} style={{ cursor: "pointer", width: "30px", height: "30px", marginRight: "5px", display: "flex", justifyContent: "center", alignItems: "center" }}>EN</div>
      }

      <div style={{ cursor: "pointer", width: "30px", height: "30px", marginRight: "5px", display: "flex", justifyContent: "center", alignItems: "center" }}>

        {appData.system.darkmode ?
          <FontAwesomeIcon icon={faMoon} size={"2x"} onClick={setColorMode} />
          :
          <FontAwesomeIcon icon={faSun} size={"2x"} onClick={setColorMode} />
        }

      </div>

    </div>


  )
}
