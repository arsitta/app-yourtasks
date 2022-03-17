export const unselectAvatar = (currentName) => {
    const selectedClass = 'create__random-avatar-selected'
    const divToUnselect = document.getElementById(currentName);
    divToUnselect.classList.remove(selectedClass);
}
