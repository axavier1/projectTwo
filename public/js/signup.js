const signupFormHandler = async (event) => {
    event.preventDefault();
  
    document.location.replace("/signup");
  
    const user_name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();
  
    if (user_name && email && password) {
      const response = await fetch("/api/user/signup", {
        method: "POST",
        body: JSON.stringify({ user_name, email, password }),
        headers: { 'Content-Type': 'application/json'}

        
      });
  
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector(".signup-btn")
    .addEventListener("submit", signupFormHandler);
  