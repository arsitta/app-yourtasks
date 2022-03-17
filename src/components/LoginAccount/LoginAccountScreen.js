import React, { useContext } from 'react'

import { AppContext } from '../../routers/MainRouter'
import { TextTraslated } from '../traslation/TextTraslated';
import { SelectAccount } from './SelectAccount';
import { NewAccountBanner } from './NewAccountBanner';


export const LoginAccountScreen = () => {

  const [appData, dispatch, logged, setLogged, language, setLanguage] = useContext(AppContext);

  return (
    <>
      <div className='login__accounts-container'>

        <h2 className='center'> <TextTraslated language={language} text={'login-title'} /> </h2>
        <h3 className='center'> <TextTraslated language={language} text={'login-subtitle'} /> </h3>

        {appData.database.map((e, i) => <SelectAccount
          first={e.config.first}
          last={e.config.last}
          lastLogin={e.config.lastLoging}
          created={e.created}
          index={i}
          key={"user" + i}
          dispatch={dispatch}
          setLogged={setLogged}
        />
        )
        }

        <NewAccountBanner appData={appData} />

      </div>

    </>
  )
}
