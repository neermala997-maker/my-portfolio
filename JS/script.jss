
function clickMe() {
    const nav = document.querySelector("nav");
    const menuBtn = document.getElementById("menuBtn");

    nav.classList.toggle("show");

    const isOpen = nav.classList.contains("show");

    menuBtn.innerHTML = isOpen ? "✕" : "☰";
    menuBtn.setAttribute("aria-expanded", isOpen);
}


// HIGHLIGHT NAVIGATION LINKS
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        link.classList.add("active");

        // Close the mobile menu after clicking a link
        const nav = document.querySelector("nav");
        const menuBtn = document.getElementById("menuBtn");

        nav.classList.remove("show");
        menuBtn.innerHTML = "☰";
        menuBtn.setAttribute("aria-expanded", "false");

    });

});


// EXPLORE BUTTON
function showMessage() {

    alert(
        "Welcome to Nirmala's profile! 💜 Keep learning and creating!"
    );

}
