const linkContainer = document.getElementById("tab-container");
const links = linkContainer.getElementsByClassName("protection__tab-link");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(e) {
        e.preventDefault();
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}