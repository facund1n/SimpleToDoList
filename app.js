let listadoItems = JSON.parse(localStorage.getItem("listadoItems"))
	? JSON.parse(localStorage.getItem("listadoItems"))
	: [];

class Data {
	constructor(input) {
		this._input = input;
	}
	get input() {
		return this._input;
	}
}

const evento = document
	.getElementById("form")
	.addEventListener("submit", function (e) {
		const input = document.getElementById("input").value;

		dato = new Data(input);
		vista = new Vista();

		listadoItems.push(dato);
		localStorage.setItem("listadoItems", JSON.stringify(listadoItems));

		vista.agregarItems(dato);
		e.preventDefault();
	});

class Vista {
	agregarItems() {
		const items = document.getElementById("items");
		const element = document.createElement("div");
		element.innerHTML = `
        <ul><li>${dato._input}</li></ul>
        `;
		items.appendChild(element);
	}
}

function deleteValue() {
	localStorage.removeItem("listadoItems");
	location.reload();
}
