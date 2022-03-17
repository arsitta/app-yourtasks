export const selectAvatar = (currentDiv, currentIndex, nAvatars) => {
    const selectedClass = 'create__random-avatar-selected'

    const divSelected = document.getElementById(currentDiv);
    divSelected.classList.add(selectedClass);

    for (let index = 0; index < nAvatars.length; index++) {
        if (index !== currentIndex) {
            const divUnselected = document.getElementById(nAvatars[index]);
            divUnselected.classList.remove(selectedClass);
        }
    }
}
