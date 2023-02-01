"use strict";
// Render variables
let domContainer;
let root;
let bg = ReactDOM.createRoot(document.querySelector("#backgroundModal"));
let newItem = ReactDOM.createRoot(document.querySelector("#newItemModal"));
let itemList = ReactDOM.createRoot(document.querySelector("#itemList"));
var adapters = [];

// Get network adapters
window.electron.requestAdapters();
window.electron.receiveAdapters((evt, arg) => {
	adapters = arg;
});

// Activate network adapter
function activateNetwork(data) {
	window.electron.changeNetwork(data);
}

// Show modal window
function showModal() {
	bg.render(<ModalBackground visible="true" />);
	newItem.render(<ModalContainer visible="true" />);
}

// Cancel modal window
function cancelModal() {
	bg.render(<ModalBackground visible="false" />);
	newItem.render(<ModalContainer visible="false" />);
}

// Save modal window
function saveModal(data) {
	window.electron.saveJSON(data);

	bg.render(<ModalBackground visible="false" />);
	newItem.render(<ModalContainer visible="false" />);

	window.electron.requestData();
	window.electron.receiveData((evt, arg) => {
		updateData(arg);
	});
}

// Delete element
function deleteElement(element) {
	// New data array
	let newData = [];

	//Get data from JSON
	window.electron.requestData();
	window.electron.receiveData((evt, arg) => {
		//JSON data
		newData = arg;

		// Find element in JSON file
		let index = newData.find((item) => item.name === element.name);

		// Delete element
		newData.splice(index, 1);

		// Overwrite JSON data
		window.electron.overwriteJSON(newData);

		// Update data list
		updateData(newData);
	});
}

// Read data from JSON and update on first scan
window.electron.requestData();
window.electron.receiveData((evt, arg) => {
	updateData(arg);
});

// Update JSON list
function updateData(data) {
	// Render items
	itemList.render(<ItemTable items={data} />);
}

// Add new item button
$(".newItem").click(showModal);
