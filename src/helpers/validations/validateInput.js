
export const validateInput = (event, typeOfValidation) => {
    const inputValue = event.target.value;
    const errorLabelName = event.target.id + "-error";
    const expRegOnlyLetters = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

    if (event.target.value == "") { 
        document.getElementById(errorLabelName).classList.add('create__error-desact');
        document.getElementById(errorLabelName).classList.remove('create__error-act');
        return
    };

    switch (typeOfValidation) {
        case "only-letters":
            return validate(expRegOnlyLetters, inputValue, errorLabelName);

        // OTROS TIPOS DE VALIDACIONES CUANDO SEAN NECESARIAS

        default:
            break;
    }
}

const validate = (expReg, inputValue, errorLabelName) => {
    
    if (expReg.test(inputValue)) {
        document.getElementById(errorLabelName).classList.add('create__error-desact');
        document.getElementById(errorLabelName).classList.remove('create__error-act');
        return true;
    } else {
        document.getElementById(errorLabelName).classList.add('create__error-act');
        document.getElementById(errorLabelName).classList.remove('create__error-desact');
        return false;
    }

}