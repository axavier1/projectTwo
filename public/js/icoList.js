// function to assign new icon to user after he chose one

const chooseIcon = async (event) => {
    event.preventDefault();
    const img_src = event.target.getAttribute('src');
    const id = document.querySelector('.id').getAttribute('id');
    // console.log(id)
    // console.log(img_src);
    const response = await fetch(`/api/profiles/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ img_src }),
        headers: { 'Content-Type': 'application/json' }
    })

    if (response.ok) {
        window.location.replace('/update/profile');
    } else {
        alert('failed to update');
    }
}


document.querySelector('#list').addEventListener('click', chooseIcon);