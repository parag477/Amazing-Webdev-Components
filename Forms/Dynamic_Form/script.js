function SubmitHandler() {
	const namee = document.getElementById("d1");
	const agee = document.getElementById("d2");
	const cityy = document.getElementById("d3");

	const Output = document.getElementById("out");
	Output.textContent = "";

	let p1 = document.createElement("div");
	let p2 = document.createElement("div");
	let p3 = document.createElement("div");

	p1.textContent = "Name: " + namee.value;
	p2.textContent = "Age: " + agee.value;
	p3.textContent = "City: " + cityy.value;

	Output.appendChild(p1);
	Output.appendChild(p2);
	Output.appendChild(p3);
	Output.style.visibility = "visible";
	Output.style.fontSize = "22px";
}
