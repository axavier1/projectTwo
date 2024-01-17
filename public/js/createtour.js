const createTourHandler = async (event) => {
  event.preventDefault();
  // console.log("working");

  const title = document.querySelector("#title").value.trim();
  const description = document.querySelector("#description").value.trim();
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
  if (title && description) {
    const response = await fetch("/api/tours", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("new account");
      document.location.replace("/tours");
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector("#submit").addEventListener("click", createTourHandler);
