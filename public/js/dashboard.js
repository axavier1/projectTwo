
const delButtonHandler = async (event) => {
    event.preventDefault();
    confirm("Are you sure you want to delete this  Tour");
    console.log("WORKIN");
    if (event.target.hasAttribute('id')) {
        const id = event.target.getAttribute('id');
        console.log(id);
        const response = await fetch(`/api/tours/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete Tour');
        }
    }
};

if (document.querySelector('.delete')) {
    const delArr = document.querySelectorAll('.delete');
    delArr.forEach(btn => btn.addEventListener('click', delButtonHandler))
}

// function to remove  planned tour

const removeTour = async (event) => {
    event.preventDefault();
    confirm("Are you sure you want to remove yourself from this  Tour");
    console.log("WORKIN");
    const id = event.target.getAttribute('id');
    // console.log(id);
    const response = await fetch(`/api/members/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to delete Tour');
    }
}
if (document.querySelector('.cancel')) {
    const btnArr = document.querySelectorAll('.cancel');
    btnArr.forEach(btn => btn.addEventListener('click', removeTour))
}