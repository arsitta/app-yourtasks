import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { getRandomAvatars } from '../../helpers/handleRandomAvatar/getRandomAvatars'
import { selectAvatar } from '../../helpers/handleRandomAvatar/selectAvatar';

export const RandomAvatars = ({ children }) => {

    const nAvatars = [
        "random-avatar0",
        "random-avatar1",
        "random-avatar2",
    ];

    useEffect(() => {
        getRandomAvatars(nAvatars)
    }, [])

    return (
        <>
            <p>
                {children[0]}
                <Link to={''} className={'sm'} onClick={() => getRandomAvatars(nAvatars)}>{children[1]}</Link>
            </p>
            <div className='create__avatars-container'>

                {nAvatars.map((currentDiv, currentIndex) => {
                    return (
                        <div
                            key={currentDiv}
                            id={currentDiv}
                            className='create__random-avatar'
                            onClick={() => { selectAvatar(currentDiv, currentIndex, nAvatars) }}>
                        </div>
                    )
                })}
            </div >
        </>
    )
}
