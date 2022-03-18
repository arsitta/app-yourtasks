import React from 'react'
import { Link } from 'react-router-dom';

const requestRandomUser = () => {
    fetch("https://random-data-api.com/api/users/random_user")
        .then((r) => r.json())
        .then((r) => {
            const firstName = document.getElementById("first-name");
            const lastName = document.getElementById("last-name");
            firstName.value = r.first_name;
            lastName.value = r.last_name;
        })
        .catch((e) => console.log(e))
}

export const AutocompleteUserData = ({ children }) => {
    return (
        <div onClick={requestRandomUser}>
            <Link to={""}>
                {children}
            </Link>
        </div>
    )
}





