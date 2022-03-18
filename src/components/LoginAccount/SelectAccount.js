import React from 'react'
import { TextTraslated } from '../traslation/TextTraslated';

export const SelectAccount = ({
  first,
  last,
  avatar,
  created,
  lastLogin,
  dispatch,
  index,
  setLogged,
}
) => {

  return created &&
    <div className='login__account' onClick={() => {
      dispatch({ type: "logUser", payload: { user: index } })
      setLogged(true);
    }
    }
    >
      <div className='login__account-avatar' style={{ backgroundImage: avatar }}></div>
      <div className='login__account-description'>
        <p>{first}</p>
        <p>{last}</p>

        <TextTraslated text={'last-activity'} tag={'none'} />
        {lastLogin}
      </div>
    </div>
}
