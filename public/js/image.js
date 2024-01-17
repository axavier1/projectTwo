// function uploadImage() {
//     const formData = new FormData();
//     const fileInput = document.getElementById('imageInput');


//     if (fileInput.files.length > 0) {
//       const file = fileInput.files[0];
//       formData.append('image', file);


//       fetch('/upload/image', {
//         method: 'POST',
//         body: formData,
//       })
//       .then(response => response.json())
//       .then(data => {
//         console.log('Image uploaded successfully:', data);

//       })
//       .catch(error => {
//         console.error('Error uploading image:', error);
//       });
//     } else {
//       console.warn('No image selected.');
//     }
//   };

document.getElementById("new-img").addEventListener("click", async (e) => {
  let imageInput = document.getElementById("image-input").value.trim();
  // console.log(imageInput);
  document.getElementById("image").src = imageInput;

  //   if (!imageInput.value) {
  //     alert("Please enter an image URL");
  //     return;
  //   }

  //   try {
  //     const response = await fetch("/api/tours", {
  //       method: "POST",
  //       body: JSON.stringify({ image: imageInput.value }),
  //       headers: { 'Content-Type': 'application/json' }
  //     });

  //     if (response.ok) {
  //       console.log('New account created');
  //       document.location.replace("/tourinfo/:");
  //     } else {
  //       alert(response.statusText);
  //     }
  //   } catch (error) {
  //     console.error('Error during fetch:', error);
  //     alert('An error occurred while processing your request.');
  //   }
});
