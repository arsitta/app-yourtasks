import React, { useContext } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';

import { AppContext } from '../../routers/MainRouter'
import { defaultColorsAvatar } from '../../data/defaultData';
import { getNumberOfAccountsEmpties } from '../../helpers/getNumberOfAccounts';
import { createNewAccount } from '../../helpers/createNewAccount';

export const CreateAccountScreen = () => {

  const [appData, dispatch] = useContext(AppContext);

  const nAccountsEmpties = getNumberOfAccountsEmpties(appData);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/login/')
  }

  return (nAccountsEmpties > 0)
    ?
    <div className='login__accounts-container'>

      <h1 className='center lg'>Create your account:</h1>

      <Link to="/">
        <p className='center sm'>
          Completar con datos aleatorios
        </p>
      </Link>


      <label>
        <p style={{ marginTop: '30px' }}>Your name:</p>
        <input className={'textbox'} placeholder={"Joe"} type={'text'} id={"name"} autocomplete="off"/>
      </label>

      <div className='create__avatar-section mt-5'>

        <p>Select your avatar color:</p>

        <div className='create__color-pallette'>
          {defaultColorsAvatar.map((e) => <div key={e} className='avatar-color' style={{ backgroundColor: e }}></div>)}
        </div>

      </div>

      <div className='create__buttons mt-5'>
        <button className='btn' onClick={handleBack}>Volver</button>
        <button className='btn btn-primary' onClick={handleBack}>Crear cuenta</button>
      </div>

    </div>
    :
    <Navigate to={'/login'} />

}
