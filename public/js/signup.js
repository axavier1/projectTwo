const signupFormHandler = async (event) => {
  event.preventDefault();
  console.log('working')
  // document.location.replace("/signup");

  const user_name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  const confPassword = document.querySelector("#confPassword").value.trim();
  if (password != confPassword) {
    alert(`password not match`)
    return;
  }
  if (user_name && email && password) {
    const response = await fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify({ user_name, email, password }),
      headers: { 'Content-Type': 'application/json' }


    });

    if (response.ok) {
      console.log('new account')
      document.location.replace("/dashboard");

    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector("#signup-btn")
  .addEventListener("click", signupFormHandler);
