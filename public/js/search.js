document.getElementById("searchForm").addEventListener("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the value from the search input
    var searchTerm = document.getElementById("default-search").value;

    // Perform any search-related actions here
    console.log("Search term:", searchTerm);
    
    // You can add more logic here, like making an AJAX request to a server for search results
});