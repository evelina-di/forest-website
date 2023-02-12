const burgerIcon = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav__link");
const footerYear = document.querySelector(".footer__year");
const allSections = document.querySelectorAll(".section");
const header = document.querySelector(".header");
const emailInput = document.querySelector("#mail");
const messageArea = document.querySelector("#question");
const emailError = document.querySelector(".contact__form-error");
const formInfo = document.querySelector(".contact__form-info");
const form = document.querySelector("form");
const submitBtn = document.querySelector(".submit");
const subpages = ["contact", "404", "offer", "thankyou"];

const handleBurgerMenu = () => {
	nav.classList.toggle("active");

	if (nav.classList.contains("active")) {
		burgerIcon.classList.add("is-active");
	} else if (!nav.classList.contains("active")) {
		burgerIcon.classList.remove("is-active");
	}
};

const handleMobHeader = () => {
	subpages.forEach((subpage) => {
		if (window.location.href.indexOf(subpage) > -1 && window.innerWidth < 768) {
			header.style.display = "none";
		}
	});
};

const handleMobileMenu = () => {
	navLinks.forEach((link) => {
		link.addEventListener("click", () => {
			nav.classList.remove("active");
			burgerIcon.classList.remove("is-active");
		});
	});
};

const validateForm = () => {
	const re =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	console.log(emailInput.value + " em");
	console.log(messageArea.value + " mes");

	if (emailInput.value === "" || messageArea.value === "") {
		formInfo.style.visibility = "visible";
		formInfo.textContent = "Wypełnij oba pola aby wysłać wiadomość.";
	}

	if (!re.test(emailInput.value)) {
		emailError.style.visibility = "visible";
	} else {
		emailError.style.visibility = "hidden";
	}

	if (
		emailInput.value !== "" &&
		messageArea.value !== "" &&
		re.test(emailInput.value)
	) {
		form.submit();
		emailError.style.visibility = "hidden";
		formInfo.style.visibility = "visible";
		formInfo.textContent = "Wiadomość wysłana!";
		clearContent();
	}
};

const clearContent = () => {
	emailInput.value = "";
	messageArea.value = "";
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleMobileMenu();
burgerIcon.addEventListener("click", handleBurgerMenu);
handleMobHeader();
form.addEventListener("submit", (e) => {
	e.preventDefault();

	validateForm();
});

handleCurrentYear();
