import { type } from "../actions/type";
import { defaultData } from "../data/defaultData";
import { defaultEmptyUser, defaultUserConfig } from "../data/defaultUser";

export const initAppDataReducer = () => {
    return JSON.parse(localStorage.getItem('app-yourtasks')) || defaultData;
}

export const appDataReducer = (appData = defaultData, action) => {
    console.log(action);
    const newAppData = { ...appData };

    switch (action.type) {

        case type.changeUserName:
            newAppData.database[action.payload.user].config.name = action.payload.newName;
            return newAppData;

        case type.createUser:
            newAppData.database[action.payload.user].config.name = action.payload.newName;
            newAppData.database[action.payload.user].created = true;
            return newAppData;

        case type.deleteUser:
            newAppData.database[action.payload.user].created = false;
            newAppData.database[action.payload.user].config = { ...defaultUserConfig };
            newAppData.database[action.payload.user].tasks = [];
            return newAppData;

        case type.logIn:
            newAppData.system.logged = true;
            return newAppData;

        case type.logOut:
            newAppData.system.logged = false;
            return newAppData;

        case type.setColorMode:
            newAppData.system.darkmode = !newAppData.system.darkmode;
            return newAppData;

        case type.setLanguage:
            newAppData.system.language = action.payload.state;
            return newAppData;

        default:
            return newAppData;

    }
}





