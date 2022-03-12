import { defaultActiveUser } from "./defaultUser";

export const defaultData = {
    system: {
        logged: false,
        user: 0,
        darkmode: false,
        language: "ESP",
    },
    database: [
        { ...defaultActiveUser},
        { ...defaultActiveUser },
        { ...defaultActiveUser },
    ]
}

export const defaultColorsAvatar = [
    "#003a5d",
    "#5c0014",
    "#d9b72b"
]
// { ...defaultEmptyUser }