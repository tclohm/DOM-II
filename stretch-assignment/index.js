let nodeList = document.querySelector(".blocks");
//console.log(nodeList.childNodes);

nodeList.childNodes.forEach( (element, index) => {
	element.addEventListener("click", (e) => {
		//console.log(nodeList.childNodes[index])
		setTimeout(function () {
			nodeList.insertBefore(element, nodeList.childNodes[0]);
			element.style.transform = "translate(0, 0px)";
		}, 300)
		//console.log(element.offsetTop);
		element.style.transform = `translate(0, -${element.offsetTop - 110}px)`;
		element.style.transition = "transform 0.3s";
		//console.log(nodeList);
	});
});



// const red = document.querySelector(".block--red");
// const blue = document.querySelector(".block--blue");
// const green = document.querySelector(".block--green");
// const pink = document.querySelector(".block--pink");
// const gray = document.querySelector(".block--gray");

// let array = ["red", "blue", "green", "pink", "gray"].map( (color) => {
// 	return document.querySelector(`.block--${color}`);
// });

// used on array before understanding what happens here
// array.forEach( (element, index) => {
// 	element.addEventListener("click", () => {
// 		const hold = array.splice(index, 1);
// 		array.unshift(hold[0]);
// 		console.log(array);
// 	});
// });


nodeList.childNodes.forEach( (element, index) => {
	let count = 0;
	element.addEventListener("mousedown", () => {
		count = 400;
		element.style.transform = `translate(${count}px)`;
		element.style.transition = `transform 0.3s`;
	});
});

nodeList.childNodes.forEach( (element) => {
	element.addEventListener("mouseup", () => {
		element.style.transform = `translate(${10}px)`;
		element.style.transition = `transform 0.3s`;
	});
});
