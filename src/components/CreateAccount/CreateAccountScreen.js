import React, { useContext, useEffect, useMemo } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

import { AppContext } from '../../routers/MainRouter'
import { getNumberOfAccountsEmpties } from '../../helpers/getNumberOfAccounts';
import { InputText } from './InputText';
import { AutocompleteUserData } from './AutocompleteUserData';
import { TextTraslated } from '../traslation/TextTraslated';
import { RandomAvatars } from './RandomAvatars';
import { getNewAccount } from '../../helpers/handleCreateAccout/getNewAccount';

export const CreateAccountScreen = () => {

  const [appData, dispatch, logged, setLogged, language, setLanguage] = useContext(AppContext);
  const nAccountsEmpties = getNumberOfAccountsEmpties(appData);
  const navigate = useNavigate();
  const createUserId = appData.database.indexOf(appData.database.find(e => e.created == false));



  const handleBack = () => {
    navigate('/login/')
  }

  return (nAccountsEmpties > 0)
    ?
    <div className='login__accounts-container'>


      <TextTraslated text={"create-your-account"} className='center lg' tag="h1" language={language} />


      <AutocompleteUserData>
        <TextTraslated language={language} text={"autocomplete-user"} className={'center sm'} />
      </AutocompleteUserData>

      <InputText
        title={<TextTraslated text={'first-name'} className={'mt-6'} language={language} />}
        placeholder={'Joe'}
        id={'firstName'}
      />

      <InputText
        title={<TextTraslated text={'last-name'} className={'mt-4'} language={language} />}
        placeholder={'Doe'}
        id={'lastName'}
      />

      <div className='create__avatar-section mt-5'>
        <RandomAvatars>
          <TextTraslated text={'select-avatar'} language={language} tag={'none'}/>
          <TextTraslated text={'generate-avatars'} language={language} tag={'none'}/>
        </RandomAvatars>
      </div>

      <div className='create__buttons mt-5'>
        <button className='btn' onClick={handleBack}>
          <TextTraslated text={'back'} language={language} tag={'none'} />
        </button>
        <button className='btn btn-primary' onClick={() => getNewAccount({ dispatch, createUserId })}>
          <TextTraslated text={'create-account'} language={language} tag={'none'} />
        </button>
      </div>
    </div>
    :
    <Navigate to={'/login'} />

}
