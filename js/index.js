// Your code goes here

// 1. mouse over links to make goldenrod
document.querySelectorAll(".nav-link").forEach( (element) => {
	element.addEventListener("mouseover", (el) => {
		el.target.style.color = "goldenrod";
		event.preventDefault();
		setTimeout( () => {
			el.target.style.color = "";
		}, 1000)
	});
})

// 2. double click on logo
const logo = document.querySelector(".logo-heading");
logo.addEventListener("dblclick", () => {
	logo.textContent = "Fun Fun Fun Bus!";
});

// 3. mouse enter and leave bus image
const busImage = document.querySelector(".container .intro img");
busImage.addEventListener("mouseenter", () => {
	busImage.style.transform = "scale(1.1)";
	busImage.style.transition = "transform 0.3s";
});


busImage.addEventListener("mouseleave", () => {
	busImage.style.transform = "scale(1.0)";
	busImage.style.transition = "transform 0.2s";
	setTimeout( () => {
		busImage.style = 0
	}, 100);
});

// 4.
const body = document.querySelector("body");
body.addEventListener("keydown", (keyboard) => {
	if (keyboard.code === "KeyY") {
		body.style.background = "yellow";
	}
	else if (keyboard.code === "KeyI") {
		body.style.background = "purple";
	} else {
		body.style.background = "white";
	}
});

// 5.
const btns = document.querySelectorAll(".btn");
btns.forEach( (element) => {
	element.addEventListener("mouseup", () => {
		alert("pressed the button!")
	})
});

// 6.
const headerTwo = document.querySelector("h2");
window.addEventListener("scroll", () => {
	headerTwo.textContent = `Welcome To Fun Bus! ${pageYOffset}px`;
});

// 7.
let scale = 1;
const imageDestination = document.querySelector(".content-destination img");
imageDestination.addEventListener("wheel", (event) => {
	event.preventDefault();
	scale += event.deltaY * -0.01;
	scale = Math.min(Math.max(.125, scale), 4);
	imageDestination.style.transform = `scale(${scale})`;
});

// 8.
const firstNavLink = document.querySelector(".nav-link").focus();

// 9.
let resizeCount = 0;
window.addEventListener("resize", () => {
	const paragraph = document.querySelector(".container .intro p");
	resizeCount += 1
	paragraph.innerHTML = `Window has been resized ${resizeCount} times.`
})

// 10.
const adventure = document.querySelector(".container .inverse-content")
const adventureAwaitsPara = document.querySelector(".container .inverse-content .text-content p");
adventureAwaitsPara.addEventListener("click", () => {
	event.stopPropagation();
	alert(adventureAwaitsPara.textContent);
	adventureAwaitsPara.style.background = "red";
});

adventure.addEventListener("click", () => {
	adventure.style.background = "pink";
});

