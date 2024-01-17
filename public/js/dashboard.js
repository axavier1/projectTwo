
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
    document.querySelector('.delete').addEventListener('click', delButtonHandler);
}