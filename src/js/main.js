const burgerIcon = document.querySelector(".burger-icon");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav_link");

const handleBurgerMenu = () => {
	nav.classList.toggle("active");
};

const handleMobileMenu = () => {
	navLinks.forEach((link) => {
		link.addEventListener("click", () => {
			nav.classList.remove("active");
			console.log("clicked");
		});
	});
};
handleMobileMenu();
burgerIcon.addEventListener("click", handleBurgerMenu);
