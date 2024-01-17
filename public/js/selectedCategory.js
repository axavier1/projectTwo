document.addEventListener("DOMContentLoaded", function () {
    // Wait for the DOM to be fully loaded

    // Get the select element
    var categorySelect = document.getElementById("tour-category");

    // Variable to store the selected category
    var selectedCategory = "";

    // Add event listener for the change event on the select element
    categorySelect.addEventListener("change", function (event) {
        // Update the selectedCategory variable with the selected value
        selectedCategory = event.target.value;

        // Log the selected category (you can replace this with your desired logic)
        console.log("Selected Category:", selectedCategory);
    });

    // Add event listener for the form submission
    document.getElementById("submit").addEventListener("click", function () {
        // Log the selected category again (you can replace this with your desired logic)
        console.log("Selected Category on Submission:", selectedCategory);

        // You can use the selectedCategory value in your further processing or send it to the server
    });
});
