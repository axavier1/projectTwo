function uploadImage() {
    const formData = new FormData();
    const fileInput = document.getElementById('imageInput');
    

    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      formData.append('image', file);

     
      fetch('/upload/image', {
        method: 'POST',
        body: formData,
      })
      .then(response => response.json())
      .then(data => {
        console.log('Image uploaded successfully:', data);
  
      })
      .catch(error => {
        console.error('Error uploading image:', error);
      });
    } else {
      console.warn('No image selected.');
    }
  };