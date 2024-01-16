const memosFormhandler = async (event) => {
    event.preventDefault();
   
  
    const title = document.querySelector("#title").value.trim();
    const description = document.querySelector("#description").value.trim();
    if (title && description) {
      const response = await fetch("/api/users/memos", {
        method: "POST",
        body: JSON.stringify({ title, description}),
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
    .querySelector("#submit")
    .addEventListener("click", memosFormhandler);
  