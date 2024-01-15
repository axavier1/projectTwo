// function for Right Side Bar to open it or close it
let mini = true;
function toggleSidebar() {
    if (mini) {
        document.getElementById("sideBarId").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        mini = false;
    } else {
        document.getElementById("sideBarId").style.width = "85px";
        document.getElementById("main").style.marginLeft = "85px";
        mini = true;
    }
};

