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
            newAppData.database[action.payload.user].config.first = action.payload.first;
            newAppData.database[action.payload.user].config.last = action.payload.last;
            newAppData.database[action.payload.user].config.avatar = action.payload.backgroundImage;
            newAppData.database[action.payload.user].created = true;
            return newAppData;

        case type.deleteUser:
            newAppData.database[action.payload.user].created = false;
            newAppData.database[action.payload.user].config = { ...defaultUserConfig };
            newAppData.database[action.payload.user].tasks = [];
            newAppData.system.user = action.payload.user;
            newAppData.system.logged = false;
            return newAppData;

        case type.setColorMode:
            newAppData.system.darkmode = !newAppData.system.darkmode;
            return newAppData;

        case type.logUser:
            newAppData.system.user = action.payload.user;
            newAppData.system.logged = true;
            return newAppData;

        case type.deslogUser:
            newAppData.system.user = action.payload.user;
            newAppData.system.logged = false;
            return newAppData;

        default:
            return newAppData;

    }
}





