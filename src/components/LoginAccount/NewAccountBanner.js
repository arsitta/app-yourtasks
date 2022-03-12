import React from 'react'
import { Link } from 'react-router-dom';
import { getNumberOfAccountsEmpties } from '../../helpers/getNumberOfAccounts';


export const NewAccountBanner = ({ appData }) => {

    const nAccountsEmpties = getNumberOfAccountsEmpties(appData);

    return (nAccountsEmpties > 0)
        ?
        <div className='login__new-account-banner'>
            <p>Dont have an account? <Link to={'/login/create'}>Sign Up!</Link></p>
            There are still <strong>{nAccountsEmpties}</strong> accounts available!
        </div>
        :
        <div className='login__new-account-banner'>
            <p>Limite maximo de 3 cuentas alcanzado!</p>
            <p className={'sm'}>Para crear una nueva cuenta es necesario logearse en una existente y eliminarla desde su panel</p>
        </div>

}
