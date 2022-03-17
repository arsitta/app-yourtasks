import { Navigate } from "react-router-dom";
import { RandomAvatars } from "../../components/CreateAccount/RandomAvatars";

export const getNewAccount = ({dispatch, createUserId}) => {
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const avatar = document.getElementsByClassName("create__random-avatar-selected");


    
    //console.log(avatar);
        
        
        // window.getComputedStyle((avatar).backgrondColor));

    

    // dispatch({ type: "createUser", payload: { user: createUserId, first: firstName.value, last: lastName.value } });
    // Navigate('/login/');
}   