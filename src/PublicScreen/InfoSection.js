import React, { useContext } from 'react'
import { TextTraslated } from '../components/traslation/TextTraslated';
import { AppContext } from '../routers/MainRouter'

export const InfoSection = () => {

    const [appData, dispatch, logged, setLogged, language, setLanguage] = useContext(AppContext);

    return (
        <div className='public__info-container'>

            <div className='public__info-picture'></div>

            <TextTraslated text={"info-title"} tag={'h1'} className={'public__info-title'} />

            <TextTraslated text={"info-desc"} className={'public__info-desc'} />

            <div className='public__info-deco-1'></div>
            <div className='public__info-deco-2'></div>
            <div className='public__info-deco-3'></div>

        </div>
    )
}
