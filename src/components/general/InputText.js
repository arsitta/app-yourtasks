import { faEject } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { validateInput } from '../../helpers/validations/validateInput';

export const InputText = ({ title, placeholder, id, typeOfValidation='none'}) => {
    return (

        <label>
            {title}
            <input
                autoComplete={"off"}
                className={'textbox'}
                placeholder={placeholder}
                type={'text'}
                id={id}
                autoCapitalize={'true'}
                onKeyUp={event => validateInput(event, typeOfValidation)}
            />
        </label>
    )
}
