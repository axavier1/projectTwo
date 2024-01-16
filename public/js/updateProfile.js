// function to add updated info to DataBase
const updateProfile = async (event) => {
    event.preventDefault();
    // console.log(document.querySelector('#updateProf-btn').getAttribute('class'));
    const img_src = document.querySelector('#img').getAttribute('src');
    const profile_name = document.querySelector('#my-name').value.trim();
    const age = document.querySelector('#age').value.trim();
    const fav_place = document.querySelector('#fav-plc').value.trim();
    const bio = document.querySelector('#bio-txt').value.trim();
    const tips = document.querySelector('#tips-text').value.trim();
    const story = document.querySelector('#story-text').value.trim();
    const profileObj = { img_src, profile_name, age, fav_place, bio, tips, story }
    // console.log(profileObj);
    const id = document.querySelector('#updateProf-btn').getAttribute('class');
    const res = await fetch(`/api/profiles/${id}`, {
        method: 'PUT',
        body: JSON.stringify(profileObj),
        headers: { 'Content-Type': 'application/json' }
    })

    if (res.ok) {
        window.location.replace('/update/profile');
    } else {
        alert('failed to update');
    }

}

document.querySelector('#updateProf-btn').addEventListener('click', updateProfile);