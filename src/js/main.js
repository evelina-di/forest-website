const burgerIcon = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav__link");
const footerYear = document.querySelector(".footer__year");
const allSections = document.querySelectorAll(".section");
const header = document.querySelector(".header");
const emailInput = document.querySelector("#mail");
const messageArea = document.querySelector("#question");
const emailError = document.querySelector(".contact__form-error");
const thankyouMessage = document.querySelector(".contact__form-thankyou");
const submitBtn = document.querySelector(".submit");

const handleBurgerMenu = () => {
	nav.classList.toggle("active");

	if (nav.classList.contains("active")) {
		burgerIcon.classList.add("is-active");
	} else if (!nav.classList.contains("active")) {
		burgerIcon.classList.remove("is-active");
	}
};

console.log(window.innerWidth);

const handleMobHeader = () => {
	if (window.location.href.indexOf("contact") > -1 && window.innerWidth < 768) {
		header.style.display = "none";
	} else {
		header.style.display = "flex";
	}
};

const handleMobileMenu = () => {
	navLinks.forEach((link) => {
		link.addEventListener("click", () => {
			nav.classList.remove("active");
			burgerIcon.classList.remove("is-active");
		});
	});
};

const checkEmail = () => {
	const re =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (!re.test(emailInput.value)) {
		emailError.style.visibility = "visible";
	} else {
		emailError.style.visibility = "hidden";
		clearContent();
		showThankYouMessage();
	}
};

const clearContent = () => {
	emailInput.value = "";
	messageArea.value = "";
};

const showThankYouMessage = () => {
	thankyouMessage.style.visibility = "visible";
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleMobileMenu();
burgerIcon.addEventListener("click", handleBurgerMenu);
handleCurrentYear();
handleMobHeader();
submitBtn.addEventListener("click", checkEmail);
