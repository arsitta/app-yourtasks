import { memo, useContext } from "react";
import { es } from "../../data/es";
import { en } from "../../data/en";
import { AppContext } from "../../routers/MainRouter";

export const TextTraslated = memo(({ text, className, tag }) => {

    const [appData, dispatch, logged, setLogged, language, setLanguage] = useContext(AppContext);

    const traslated = (language == "ES") ? es[text] : en[text];

    const selectTag = (tag, className, traslated) => {
        switch (tag) {
            case "none":
                return (traslated);
            case "h1":
                return (<h1 className={className}>{traslated}</h1>);
            case "h2":
                return (<h2 className={className}>{traslated}</h2>);
            case "h3":
                return (<h3 className={className}>{traslated}</h3>);
            case "h4":
                return (<h4 className={className}>{traslated}</h4>);
            default:
                return (<p className={className}>{traslated}</p>);
        }
    }

    return (
        <>
            {selectTag(tag, className, traslated)}
        </>
    )

})
