const createTourHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#title").value.trim();
  const description = document.querySelector("#description").value.trim();
  const text = document.querySelector("#text").value.trim();
  const category_id = document.querySelector("#tour-category").value;

  if (document.getElementById('1')) {
    console.log(`working`)
    const imgSrcArr = []
    const imgArr = document.querySelectorAll('.img-src');
    imgArr.forEach((imgEl) => imgSrcArr.push(imgEl.getAttribute('src')));
    // return

    if (title && description && text) {
      console.log(imgSrcArr);
      const response = await fetch("/api/tours", {
        method: "POST",
        body: JSON.stringify({ title, description, text, imgSrcArr, category_id }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        // console.log("new account");
        document.location.replace("/tours");
      } else {
        alert(response.statusText);
      }
    }
  }
};

document.querySelector("#submit").addEventListener("click", createTourHandler);


let index = 1;
document.getElementById("add-img").addEventListener("click", (e) => {
  let imageInput = document.getElementById("image-input").value.trim();
  document.getElementById("image").src = imageInput;
  document.getElementById('image').setAttribute('id', index);
  document.getElementById(index).setAttribute('class', 'img-src mt-3')
  index++;

  const imgHolder = document.getElementById('img-ul');
  const newImg = document.createElement('img');
  newImg.setAttribute('id', 'image');
  imgHolder.appendChild(newImg);

});


//   const fileInput = document.querySelector("#image");
//   const formData = new FormData();

//   if (fileInput.files.length > 0) {
//     const fileName = fileInput.files[0].name;
//     const fileExtension = fileName.split(".").pop().toLowerCase();

//     // Array of allowed image file extensions
//     const allowedExtensions = ["jpg", "jpeg", "png", "gif"];

//     if (allowedExtensions.indexOf(fileExtension) === -1) {
//       alert("Please upload a valid image file (jpg, jpeg, png, gif).");
//       return;
//     }

//     // Append the image file to FormData
//     formData.append("image", fileInput.files[0]);
//   }
//   formData.append("title", title);
//   formData.append("description", description);

//   for (const value of formData.entries()) {
//     console.log(value);
//   }