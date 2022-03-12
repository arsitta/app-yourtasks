import React, { useContext } from 'react'

import { AppContext } from '../../routers/MainRouter'
import { LoginAccount} from './LoginAccount';
import { NewAccountBanner} from './NewAccountBanner';


export const LoginAccountScreen = () => {

  const [appData, dispatch] = useContext(AppContext);

  const asd = (n) => {
    dispatch( {type:"deleteUser", payload:{user:n, newName:""}} )
  }

  const asd1 = (n) => {
    dispatch( {type:"createUser", payload:{user:n, newName:"jeje"+n} } )
  }


  return (
    <>
      <div className='login__accounts-container'>

        <h2 className='center'>Welcome back!</h2>
        <h2 className='center'>Select your account</h2>

        {appData.database.map((e, i) => <LoginAccount
          name={e.config.name}
          lastLogin={e.config.lastLoging}
          created={e.created}
          key={"user" + i}
        />
        )
        }
        <button onClick={() => asd(0)} >-0</button>
        <button onClick={() => asd(1)} >-1</button>
        <button onClick={() => asd(2)} >-2</button>

        <button onClick={() => asd1(0)} >+0</button>
        <button onClick={() => asd1(1)} >+1</button>
        <button onClick={() => asd1(2)} >+2</button>

        <NewAccountBanner appData={appData} />

      </div>

    </>
  )
}
