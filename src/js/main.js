const burgerIcon = document.querySelector(".burger-icon");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav_link");
const footerYear = document.querySelector(".footer__year");
const allSections = document.querySelectorAll(".section");

const handleBurgerMenu = () => {
	nav.classList.toggle("active");

	if (nav.classList.contains("active")) {
		burgerIcon.classList.add("burger-black");
	} else if (!nav.classList.contains("active")) {
		burgerIcon.classList.remove("burger-black");
	}
};

const handleMobileMenu = () => {
	navLinks.forEach((link) => {
		link.addEventListener("click", () => {
			nav.classList.remove("active");
			burgerIcon.classList.remove("burger-black");
		});
	});
};

const showMe = () => {
	console.log(window.scrollY);
};

const handleObserver = () => {
	const currentSection = window.scrollY;

	allSections.forEach((section) => {
		if (
			section.classList.contains("white-section") &&
			section.offsetTop <= currentSection + 60
		) {
			burgerIcon.classList.add("burger-black");
		} else if (
			!section.classList.contains("white-section") &&
			section.offsetTop <= currentSection + 60
		) {
			burgerIcon.classList.remove("burger-black");
		}
	});
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleMobileMenu();

window.addEventListener("scroll", handleObserver);
burgerIcon.addEventListener("click", handleBurgerMenu);
handleCurrentYear();
