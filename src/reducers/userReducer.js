import { actionType } from "../actions/actionType";
import { dataDefault } from "../data/dataDefault";
import { userDefault } from "../data/userDefault";

export const initAppDataReducer = () => {
    return JSON.parse(localStorage.getItem('app-yourtasks')) || dataDefault;
}

export const appDataReducer = (appData = dataDefault, action) => {

    const newAppData = { ...appData };

    switch (action.actionType) {

        case actionType.changeUserName:
            newAppData.database["user" + action.payload.user].config.name = action.payload.newName;
            return newAppData;

        case actionType.createUser:
            newAppData.database["user" + action.payload.user].config.name = action.payload.newName;
            newAppData.database["user" + action.payload.user].created = true;
            return newAppData;

        case actionType.deleteUser:
            newAppData.database["user" + action.payload.user] = { ...userDefault }
            return newAppData;

        case actionType.logIn:
            newAppData.logged.state = true;
            return newAppData;

        case actionType.logOut:
            newAppData.logged.state = false;
            return newAppData;


        default:
            return newAppData;

    }
}





