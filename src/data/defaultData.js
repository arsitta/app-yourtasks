import { defaultActiveUser } from "./defaultUser";

export const defaultData = {
    system: {
        user: "x",
        darkmode: false,
        logged: false,
    },
    database: [
        { ...defaultActiveUser},
        { ...defaultActiveUser },
        { ...defaultActiveUser },
    ]
}
