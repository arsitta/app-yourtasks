import React, { useContext, useEffect, useMemo } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

import { AppContext } from '../../routers/MainRouter'
import { getNumberOfAccountsEmpties } from '../../helpers/getNumberOfAccounts';
import { InputText } from '../general/InputText';
import { AutocompleteUserData } from './AutocompleteUserData';
import { TextTraslated } from '../traslation/TextTraslated';
import { RandomAvatars } from './RandomAvatars';
import { getNewAccount } from '../../helpers/handleCreateAccout/getNewAccount';
import { validateCreateForm } from '../../helpers/validations/validateCreateForm';

export const CreateAccountScreen = () => {

  const [appData, dispatch, logged, setLogged, language, setLanguage] = useContext(AppContext);
  const nAccountsEmpties = getNumberOfAccountsEmpties(appData);
  const navigate = useNavigate();
  const createUserId = appData.database.indexOf(appData.database.find(e => e.created == false));

  const handleBack = () => {
    navigate('/login/');
  }

  return (nAccountsEmpties > 0)
    ?
    <form className={'login__accounts-container'}>

      <TextTraslated text={"create-your-account"} className='center lg' tag="h1" />
      <AutocompleteUserData>
        <TextTraslated text={"autocomplete-user"} className={'center sm'} />
      </AutocompleteUserData>


      <InputText
        title={<TextTraslated text={'first-name'} className={'mt-5'} />}
        placeholder={'Joe'}
        id={'first-name'}
        typeOfValidation={'only-letters'}
      />
      <p id={'first-name-error'} className='create__error-desact sm'>El nombre debe contener solo letras</p>


      <InputText
        title={<TextTraslated text={'last-name'} className={'mt-4'} />}
        placeholder={'Doe'}
        id={'last-name'}
        typeOfValidation={'only-letters'}
      />
      <p id={'last-name-error'} className='create__error-desact sm'>El nombre debe contener solo letras</p>


      <div className='create__avatar-section'>
        <RandomAvatars>
          <TextTraslated text={'select-avatar'} tag={'none'} />
          <TextTraslated text={'generate-avatars'} tag={'none'} />
        </RandomAvatars>
        <p id={'select-avatar-error'} className='create__error-desact sm'>Elige tu avatar.</p>
      </div>


      <div className='create__buttons'>

        <button
          className='btn'
          onClick={handleBack}
        >
          <TextTraslated text={'back'} tag={'none'} />
        </button>

        <button
          className='btn btn-primary'
          onClick={() => validateCreateForm(dispatch, createUserId)}
        >
          <TextTraslated text={'create-account'} tag={'none'} />
        </button>

      </div>


    </form>
    :
    <Navigate to={'/login'} />

}
