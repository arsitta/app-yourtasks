import React, { useContext } from 'react'

import { AppContext } from '../../routers/MainRouter'
import { TextTraslated } from '../traslation/TextTraslated';
import { SelectAccount } from './SelectAccount';
import { NewAccountBanner } from './NewAccountBanner';
import { getNumberOfAccountsEmpties } from '../../helpers/getNumberOfAccounts';
import { numMaxAccounts } from '../../data/defaultAppSettings';
import { NoAccountsCreated } from './NoAccountsCreated';


export const LoginAccountScreen = () => {

  const [appData, dispatch, logged, setLogged, language, setLanguage] = useContext(AppContext);

  const nAccountsEmpties = getNumberOfAccountsEmpties(appData);

  return (
    <>
      <div className='login__accounts-container'>


        <TextTraslated text={'login-title'} tag={'h2'} className={'center'} />
        <TextTraslated text={'login-subtitle'} tag={'h3'} className={'center'} />

        {
          (nAccountsEmpties == numMaxAccounts)
            ?
            <NoAccountsCreated />
            :
            appData.database.map((e, i) => <SelectAccount
              first={e.config.first}
              last={e.config.last}
              avatar={e.config.avatar}
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
