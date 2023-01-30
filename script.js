
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open")
});


navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
    });
});



const expandButton = document.querySelector('.expand-button');
const expandedContent = document.querySelector('.expanded-content');

expandedContent.style.display = "none";
expandButton.style.transform = "rotate(0deg)";

expandButton.addEventListener('click', function() {
  expandedContent.style.display = expandedContent.style.display === 'none' ? 'block' : 'none';
  expandButton.style.transform = expandButton.style.transform === 'rotate(0deg)' ? 'rotate(90deg)' : 'rotate(0deg)';
});