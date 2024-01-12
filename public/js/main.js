
const hideShow = (event) => {
    event.preventDefault();
    if (document.querySelector('#hidden')) {
        const hidEL = document.querySelector('#hidden')

        hidEL.setAttribute('id', 'visible');
    } else {
        document.querySelector('#visible').setAttribute('id', 'hidden');
    }
}

document.querySelector('#user-menu-button').addEventListener('click', hideShow);