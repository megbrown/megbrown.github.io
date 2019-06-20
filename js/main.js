const projects = [
	{
		title: "Historic NashGuessr",
		description: "Play a game using National Register of Historic Places data and test your knowledge of Nashville architecture and development.",
		details: "#Historic-NashGuessr",
		githubLink: "https://github.com/megbrown/Historic-NashGuessr",
		deployedLink: false,
		imageSrc: "./images/front-end-image-cap.png",
		imageAlt: "This is Historic NashGuessr."
	},
	{
		title: "Website for Angels of Heart",
		description: "Built by our team during Code for Nashville's annual hackathon.",
		details: false,
		githubLink: false,
		deployedLink: "http://angelsofheart.org/",
		imageSrc: "./images/ah-image-cap.png",
		imageAlt: "Angels of Heart Website"
	},
	{
		title: "NSS Cohort 20 Website",
		description: "Contributions to our cohort's website at NSS.",
		details: false,
		githubLink: false,
		deployedLink: "https://nss-day-cohort-20.github.io/Cohort20Site/",
		imageSrc: "./images/c20-image-cap.png",
		imageAlt: "NSS Cohort 20 website"
	},
	{
		title: "Knoxville Montessori Website",
		description: "Wordpress website customized and deployed for the Knoxville Montessori School.",
		details: false,
		githubLink: false,
		deployedLink: "http://knoxvillemontessori.org/",
		imageSrc: "./images/km-image-cap.png",
		imageAlt: "Knoxville Montessori Website"
	}
]

const technologies = [
	{
		"name": "Javascript",
		"image": "javascript"
	},
	{
		"name": "Node.js",
		"image": "nodejs"
	},
	{
		"name": "Angular.js",
		"image": "angularjs"
	},
	{
		"name": "jQuery",
		"image": "jquery"
	},
	{
		"name": "Git",
		"image": "git"
	},
	{
		"name": "Github",
		"image": "github"
	},
	{
		"name": "Grunt",
		"image": "grunt"
	},
	{
		"name": "HTML5",
		"image": "html"
	},
	{
		"name": "CSS3",
		"image": "css3"
	},
	{
		"name": "Sass",
		"image": "sass"
	},
	{
		"name": "Bootstrap",
		"image": "bootstrap"
	}
]

$(document).ready(function () {

	function buildLink(linkText) {
		var link = $('<a>').addClass('link');
		link.attr('href', linkText);
		link.attr('target', '_blank');

		var logo = $("<img class='github-logo' width='15' height='auto' />");

		if (linkText.includes('github.com')) {
			logo.attr('src', './images/github.png');
		} else {
			logo.attr('src', './images/web-b.png');
		}

		link.append(logo, linkText);
		return link;
	}

	$.each(technologies, function (i, obj) {
		let listItem = `<div class="col-sm-2 tech-logo-cont text-center">
						<img class="img-fluid tech-logo" src="./images/logos/${obj.image}.png">
						<h5 class="logo-title">${obj.name}</h5>`;
		$('#techListContainer').append(listItem);
	});

	projects.forEach(function (project) {
		var card = $('<div>').addClass('card');

		//project image
		var topImage = $('<img>').addClass('card-img-top');
		topImage.attr('src', project.imageSrc);
		topImage.attr('alt', project.imageAlt);
		topImage.attr('width', '100%');

		card.append(topImage);

		//project contents
		var cardBlock = $('<div>').addClass('card-block');

		var title = $('<h4>').addClass('card-title');
		title.text(project.title);

		var cardText = $('<p>').addClass('card-text');
		cardText.text(project.description);

		cardBlock.append(title, cardText);

		if (project.githubLink) {
			var link = buildLink(project.githubLink);
			cardBlock.append(link);
		}

		if (project.deployedLink) {
			var link = buildLink(project.deployedLink);
			cardBlock.append(link);
		}

		if (project.details) {
			var detailsButton = $("<a href='#' class='portfolio-button' data-toggle='modal'>DETAILS</a>");
			detailsButton.attr('data-target', project.details);
			cardBlock.append(detailsButton);
		}

		card.append(cardBlock);
		$("#card-container").append(card);

	})
});