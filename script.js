
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



function createProjectBlock(date, title, description, links, image) {
  return `
  <div class="cd-timeline-block">
	<div class="cd-timeline-img cd-movie"></div>
		<div class="cd-timeline-content">
			<span class="cd-date">${date}</span>
			<h3>${title}</h3>
			<div class="main-description">
				<p>&#x2022 ${description[0]}</p>
				<div class="expand-button-div"><button class="expand-button">
				<img src="imgs/expandArrow.png" class="expand-button-img">
				<img src="imgs/expandArrow.png" class="expand-button-img">
				</button></div>
			</div>
			<div class="expanded-content" style="display: none;">
				${displayFullDescription(description)}
				${displayLinks(links)}
				${displayImage(image, title)}
			</div>
		</div>
	</div>
`;
}

function displayFullDescription(description) {
	if (description.length <= 1) return ``;

	let html = '';
	for (let i = 1; i < description.length; i++) {
		html += `<p class="description-item">&#x2022 ${description[i]}</p>`;
	}
	return html;
}

function displayLinks(links) {
	if (links.length == 0) return ``;

	let html = '<p>Links: ';
	links.forEach(link => {
		console.log(link)
		if (link != {}) html += `<a href="${link.url}" class="cd-content__link">${link.text}</a>`;
	});
	html += '</p>';
	return html;
}

function displayImage(image, title) {
	if (image.length == 0) return ``;

	let html = ``;
	html += `<img src="${image}" alt="${title} Poster" class="cd-content__img">`;
	return html;
}

setTimeout(() => {
	// const expandButtons = document.querySelectorAll('.expand-button');
	const allTimelineContent = document.querySelectorAll('#projects .cd-timeline-content');
	// console.log(expandContent);

	// console.log(expand);

	for (const timelineContent of allTimelineContent) {
		timelineContent.addEventListener('click', function() {
			var selection = window.getSelection().toString();
			const content = timelineContent.querySelector(".expanded-content");
			const btn = timelineContent.querySelector(".expand-button-div");

			console.log(selection)
			if (btn.style.display === "none" && selection !== "" || event.target.nodeName === "A" ) {
				return;
			}
			// const expandedContent = this.parentNode.parentNode.nextElementSibling;
			// console.log(timelineContent)
			// console.log(btn)

			content.style.display = content.style.display === 'none' ? 'block' : 'none';
			btn.style.display = btn.style.display === 'none' ? 'flex' : 'none';
			// this.innerHTML = this.innerHTML === 'Expand' ? 'Collapse' : 'Expand';
		});
	}
}, 250);


document.querySelector("#projects #cd-timeline").innerHTML = ``;

// for (var i = 1; i <= 2; i++) {
for (var i = 1; i <= c_list.length-1; i++) {
	renderContent(i);
}

function renderContent(num) {
	document.querySelector("#projects #cd-timeline").innerHTML += `
		${createProjectBlock(c_list[num].date, c_list[num].title, c_list[num].description, c_list[num].links, c_list[num].image)}
	`;
}



const about = document.querySelector('#about');
about.style.marginBottom = "1em";
// about.style.display = "flex";
about.addEventListener('click', function() {
	var selection = window.getSelection().toString();  

	const body = about.querySelector('.my-about__body');
	const img = about.querySelector('.my-about__img');
	const btn = about.querySelector('.expand-button');
	const line = about.querySelector('.section__subtitle--about');

	if (btn.style.display === "none" && selection !== "") return;

	about.style.marginBottom = about.style.marginBottom === '1em' ? '0em' : '1em';
	line.style.paddingBottom = line.style.paddingBottom === '0.5em' ? '0em' : '0.5em';
	console.log(line.style.paddingBottom)

	body.style.display = body.style.display === 'none' ? 'block' : 'none';
	img.style.display = img.style.display === 'none' ? 'block' : 'none';
	btn.style.display = btn.style.display === 'none' ? 'flex' : 'none';



});