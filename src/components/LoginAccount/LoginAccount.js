import React from 'react'

export const LoginAccount = ({
  name,
  created,
  lastLogin
}
) => {

  return created &&
    <div className='login__account' onClick={() => console.log("jeje")}>
      <div className='login__account-avatar'></div>
      <div className='login__account-description'>
        <p>{name}</p>
        Last activity: {lastLogin}
      </div>
    </div>
}
