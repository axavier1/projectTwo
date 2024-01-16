
// function to delete session id and log out user
const logout = async () => {

    const res = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });
    if (res.ok) {
        document.location.replace('/');
    } else {
        alert(res.statusText);
    }
};

if (document.querySelector('#logout')) {
    document.querySelector('#logout').addEventListener('click', logout);
}

// function to show hide list of button on small screen

const btnList = async (event) => {
    event.preventDefault();
    if (!document.querySelector('#nav-list').style.display || document.querySelector('#nav-list').style.display == 'none') {
        document.querySelector('#nav-list').style.display = 'block';
        document.getElementById("sideBarId").style.top = "256px";
    } else {
        document.querySelector('#nav-list').style.display = 'none';
        document.getElementById("sideBarId").style.top = "64px";
    }

    console.log(document.querySelector('#nav-list').style.display)
}

if (document.querySelector('#nav-btn')) {
    document.querySelector('#nav-btn').addEventListener('click', btnList)
}