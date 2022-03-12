export const getNumberOfAccountsEmpties = (appData) => {
    let nAccountsEmpties = 3;

    for (const key in appData.database) {
        if (appData.database[key].created === true) {
            nAccountsEmpties--;
        } 
    }

    return nAccountsEmpties;
}