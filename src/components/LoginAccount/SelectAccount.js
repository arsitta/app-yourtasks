import React from 'react'

export const SelectAccount = ({
  first,
  last,
  created,
  lastLogin,
  dispatch,
  index,
  setLogged,
}
) => {

  return created &&
    <div className='login__account' onClick={() => {
      dispatch({type: "logUser", payload: {user: index}})
      setLogged(true);
    }
  }
  >
      <div className='login__account-avatar'></div>
      <div className='login__account-description'>
        <p>{first}</p>
        <p>{last}</p>
        Last activity: {lastLogin}
      </div>
    </div>
}
