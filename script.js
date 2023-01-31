
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



// const expandButton = document.querySelector('.expand-button');
// const expandedContent = document.querySelector('.expanded-content');

// expandedContent.style.display = "none";
// expandButton.style.transform = "rotate(0deg)";

// expandButton.addEventListener('click', function() {
//   expandedContent.style.display = expandedContent.style.display === 'none' ? 'block' : 'none';
//   expandButton.style.transform = expandButton.style.transform === 'rotate(0deg)' ? 'rotate(90deg)' : 'rotate(0deg)';
// });




console.log(c_list);


function createProjectBlock(date, title, description, links, image) {
  return `
  <div class="cd-timeline-block">
	<div class="cd-timeline-img cd-movie"></div>
		<div class="cd-timeline-content">
			<span class="cd-date">${date}</span>
			<h3>${title}</h3>
			${displayDescription(description)}
			${displayLinks(links)}
			<img src="${image}" alt="${title} Poster" class="cd-content__img">
		</div>
	</div>
`;
}

function displayDescription(description) {
  if (Array.isArray(description)) {
    let html = '';
    description.forEach(item => {
      html += `<p>&#x2022 ${item}</p>`;
    });
    return html;
  } else {
    return `<p>${description}</p>`;
  }
}

function displayLinks(links) {
	if (links.length == 0)
		return ``;
	let html = '<p>Links: ';
	links.forEach(link => {
		html += `<a href="${link.url}" class="cd-content__link">${link.text}</a>`;
	});
	html += '</p>';
	return html;
}


document.querySelector("#projects #cd-timeline").innerHTML = ``;

for (var i = 0; i <= c_list.length-1; i++) {
	renderContent(i);
}

function renderContent(num) {
	document.querySelector("#projects #cd-timeline").innerHTML += `
		${createProjectBlock(c_list[num].date, c_list[num].title, c_list[num].description, c_list[num].links, c_list[num].image)}
	`;
}