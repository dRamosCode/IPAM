"use strict";
// Render variables
let domContainer;
let root;
let bg = ReactDOM.createRoot(document.querySelector("#backgroundModal"));
let newItem = ReactDOM.createRoot(document.querySelector("#newItemModal"));
let itemList = ReactDOM.createRoot(document.querySelector("#itemList"));
let modalMessage = ReactDOM.createRoot(document.querySelector("#modalMessage"));
var adapters = [];
let originalItem;
const nullItem = {
	DHCP: "false",
	adapter: "",
	gateway: "",
	ipAddress: "",
	name: "",
	subnet: "",
};
// Get network adapters
window.electron.requestAdapters();
window.electron.receiveAdapters((evt, arg) => {
	adapters = arg;
});

// Activate network adapter
function activateNetwork(data) {
	window.electron.changeNetwork(data);
	showMessage("Network adapter succesfully changed", "success");
	setTimeout(hideMessage, 2000);
}

// Show modal message
function showMessage(msg, type) {
	bg.render(<ModalBackground visible="true" />);
	modalMessage.render(<ModalMessage message={msg} color={type} />);
}

// Hide modal message
function hideMessage() {
	bg.render(<ModalBackground visible="false" />);
	modalMessage.render(<ModalMessage message={"hide"} />);
}

// Hide modal message on modal
function hideMessageOnTop() {
	modalMessage.render(<ModalMessage message={"hide"} />);
}

// Show modal confirmation
function showConfirmation(data, msg, button1, button2) {
	bg.render(<ModalBackground visible="true" />);
	modalMessage.render(<ModalConfirmation element={data} message={msg} btn1={button1} btn2={button2} />);
}

// Hide modal confirmation
function hideConfirmation() {
	bg.render(<ModalBackground visible="false" />);
	modalMessage.render(<ModalConfirmation message={"hide"} />);
}

// Show modal window
function showModal() {
	bg.render(<ModalBackground visible="true" />);
	newItem.render(<ModalContainer visible="true" data={nullItem} edit={""} />);
}

// Cancel modal window
function cancelModal() {
	bg.render(<ModalBackground visible="false" />);
	newItem.render(<ModalContainer visible="false" data={nullItem} edit={""} />);
}

// Show modal edit window
function showModalEdit(item) {
	originalItem = item;
	bg.render(<ModalBackground visible="true" />);
	newItem.render(<ModalContainer visible="true" data={item} edit={"true"} />);
}

// Cancel modal edit window
function cancelModalEdit() {
	bg.render(<ModalBackground visible="false" />);
	newItem.render(<ModalContainer visible="false" data={nullItem} edit={""} />);
}

// Save modal window
function saveModal(data) {
	window.electron.saveJSON(data);

	bg.render(<ModalBackground visible="false" />);
	newItem.render(<ModalContainer visible="false" data={nullItem} edit={""} />);

	window.electron.requestData();
	window.electron.receiveData((evt, arg) => {
		updateData(arg);
	});

	showMessage("Network adapter succesfully saved", "success");
	setTimeout(hideMessage, 2000);
}

// Save modal window
function saveEditionModal(data) {
	// Read data list
	window.electron.requestData();
	window.electron.receiveData((evt, arg) => {
		// Find original data item to edit
		for (let i = 0; i < arg.length; i++) {
			if (originalItem.name == arg[i].name) {
				// Edit original data item
				arg[i] = data;
			}
		}
		// Overwrite data list
		window.electron.overwriteJSON(arg);

		// Update data list
		updateData(arg);

		// Hide Modal
		bg.render(<ModalBackground visible="false" />);
		newItem.render(<ModalContainer visible="false" data={nullItem} edit={""} />);

		// Show success message
		showMessage("Network adapter succesfully saved", "success");
		setTimeout(hideMessage, 2000);
	});
}

// Delete element
function deleteElement(element) {
	// Hide confirmation modal
	modalMessage.render(<ModalConfirmation message={"hide"} />);

	// New data array
	let newData = [];

	//Get data from JSON
	window.electron.requestData();
	window.electron.receiveData((evt, arg) => {
		//JSON data
		newData = arg;

		// Find element in JSON file
		let index = newData.findIndex((item) => item.name === element.name);

		// Delete element
		newData.splice(index, 1);
		if (index >= 0) {
			// Overwrite JSON data
			window.electron.overwriteJSON(newData);

			// Update data list
			updateData(newData);
			showMessage("Element deleted", "success");
			setTimeout(hideMessage, 2000);
		}
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
