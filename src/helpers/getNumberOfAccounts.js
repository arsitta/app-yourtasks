import { numMaxAccounts } from "../data/defaultAppSettings";

export const getNumberOfAccountsEmpties = (appData) => {
    let nAccountsEmpties = numMaxAccounts;

    for (const key in appData.database) {
        if (appData.database[key].created === true) {
            nAccountsEmpties--;
        } 
    }

    return nAccountsEmpties;
}