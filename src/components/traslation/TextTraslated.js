import { memo } from "react";
import { es } from "../../data/es";
import { en } from "../../data/en";

export const TextTraslated = memo(({ text, language, className, tag }) => {

    const traslated = (language == "ES") ? es[text] : en[text];

    const selectTag = (tag, className, traslated) => {
        switch (tag) {
            case "none":
                return (traslated);
            case "h1":
                return (<h1 className={className}>{traslated}</h1>);
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
