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

		data = new Data(input);
		vista = new Vista();

		listadoItems.push(data);
		localStorage.setItem("listadoItems", JSON.stringify(listadoItems));

		vista.addItems(data);
		e.preventDefault();
	});

class Vista {
	addItems() {
		const items = document.getElementById("items");
		const element = document.createElement("div");
		element.innerHTML = `
        <ul><li>${data._input}</li></ul>
        `;
		items.appendChild(element);
	}
}

function deleteValue() {
	localStorage.removeItem("listadoItems");
	location.reload();
}
