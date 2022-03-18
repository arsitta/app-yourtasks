import React, { useContext } from 'react'
import { AppContext } from '../../routers/MainRouter';
import { TextTraslated } from '../traslation/TextTraslated'

export const NoAccountsCreated = () => {

    const [appData, dispatch, logged, setLogged, language, setLanguage] = useContext(AppContext);

    return (
        <div className={'login__no-accounts-created'}>
            <TextTraslated text={'no-accounts'} tag={'h4'} className={'center'} />
         

        </div>
    )
}


// https://www.pinterest.es/pin/45599014971039790/
// https://www.pinterest.es/pin/436567757612259994/
// https://pbs.twimg.com/media/EQWDLK8XYAIdgFc.jpg