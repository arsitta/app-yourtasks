import React from 'react'

export const InputText = ({title, placeholder, id}) => {
    return (
        <label>
            {title}
            <input className={'textbox'} placeholder={placeholder} type={'text'} id={id} /* onChange={(event) => { createUserName = event.target.value } }*/ />
        </label>
    )
}
