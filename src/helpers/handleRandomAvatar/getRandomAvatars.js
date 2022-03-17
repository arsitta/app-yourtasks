import { unselectAvatar } from "./unselectAvatar";

export const getRandomAvatars = (nAvatars) => {
    console.log("getNewRandomAvatar");
    nAvatars.map((currentName, currentIndex) => {
        getNewAvatar(currentIndex);
        unselectAvatar(currentName);
    });
}

const getNewAvatar = (currentAvatar) => {
    const idAvatar = Math.floor(Math.random() * (1000 - 1) + 1);
    const urlFetch = `https://picsum.photos/id/${idAvatar}/100/100`;

    fetch(urlFetch)
        .then((res) => {
            if (!res.ok) {
                getNewAvatar(currentAvatar);
            }
            const urlAvatar = `url('${res.url}')`;
            const divAvatar = document.getElementById(`random-avatar${currentAvatar}`);
            divAvatar.style.setProperty("background-image", urlAvatar);
        })
        .catch( (e) => { 
            console.log(e); 
        })
}



