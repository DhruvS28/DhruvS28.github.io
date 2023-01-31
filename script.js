
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



// const content = require("./content.js");
// console.log(content.content_list);

console.log(content_list);

// function createProjectBlock(date, title, description, links, image) {
//   return `
//     <div class="cd-timeline-block">
//       <div class="cd-timeline-img cd-movie"></div>
//       <div class="cd-timeline-content">
//         <span class="cd-date">${date}</span>
//         <h3>${title}</h3>
//         <p>${description}</p>
//         <p>Links: ${links}</p>
//         <img src="${image}" alt="${title} Game Poster" class="cd-content__img">
//       </div>
//     </div>
//   `;
// }


// document.querySelector("#projects #cd-timeline").innerHTML = `
//   ${createProjectBlock("Jun 2022", "ShadowSplit", "Unity game made, for a Game Jam, in a week working with a small team. Contribution: Level design and level mechanics. Genre: Adventure, Mystery, Supernatural", `<a href="https://dhruvs28.itch.io/shadow-split" class="cd-content__link">Itch.io Page</a>
//                             <a href="https://dhruvs28.github.io/ShadowSplit/" class="cd-content__link">Web GL Build</a>`, "imgs/ShadowSplit_poster.jpg")}
//   ${createProjectBlock("May 2022", "Mousemarine", "Unity game made, for a Game Jam, over a weekend working with a medium sized team. Contribution: Most gameplay mechanics, including visual manipulation. Genre: Platformer, Adventure, Comic", `<a href="https://goodvibes.itch.io/mousemarine" class="cd-content__link">Itch.io Page</a>
//                             <a href="https://dhruvs28.github.io/Mousemarine/" class="cd-content__link">Web GL Build</a>`, "imgs/Mousemarine_poster.jpg")}
//   ${createProjectBlock("Jan 2022 - Apr 2022", "MentalMatter", "Mental excercising app that contains games to stimulate brain activity. Contribution: Team managing lead, most features and mechanics, and UI/UX. Genre: Memory, Vocabulary, Rhythm, Math", `<a href="https://drive.google.com/drive/folders/1cQzoSuJurMSceZZYIWW4bEWGZlLzCOgV?usp=sharing" class="cd-content__link">Drive Link</a>
//                             <a href="https://dhruvs28.github.io/MentalMatter/" class="cd-content__link">Web GL Build</a>`, "imgs/MentalMatter_poster.jpg")}
// `;