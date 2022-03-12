import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { AppContext } from '../routers/MainRouter'

export const PublicConfigBar = () => {

  const [appData, dispatch] = useContext(AppContext);

  const setColorMode = () => {
    dispatch({ type: "setColorMode" });
  }

  const setLanguage = (lang) => {
    dispatch({ type: "setLanguage", payload: { state: lang } });
  }


  return (

    <div className='public__config-bar'>

      {
        (appData.system.language == "ESP") ?
          <div onClick={() => setLanguage("ENG")} style={{ cursor:"pointer", width: "30px", height: "30px", marginRight: "5px", display:"flex", justifyContent:"center", alignItems:"center" }}>ENG</div>
          :
          <div onClick={() => setLanguage("ESP")} style={{ cursor:"pointer", width: "30px", height: "30px", marginRight: "5px", display:"flex", justifyContent:"center", alignItems:"center" }}>ESP</div>
      }

      <div style={{cursor:"pointer", width: "30px", height: "30px", marginRight: "5px", display:"flex", justifyContent:"center", alignItems:"center" }}>

        {appData.system.darkmode ?
          <FontAwesomeIcon icon={faMoon} size={"2x"} onClick={setColorMode} />
          :
          <FontAwesomeIcon icon={faSun} size={"2x"} onClick={setColorMode} />
        }

      </div>

    </div>


  )
}
