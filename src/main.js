"use strict";

const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { exec } = require("node:child_process");
var jetpack = require("fs-jetpack");
var network = require("network");

//require("electron-reload")(__dirname);

let mainWindow;
let adapters = [];
let userRights;

// Force close app during app installation
if (require("electron-squirrel-startup")) app.quit();

// Create new window
const createWindow = () => {
	mainWindow = new BrowserWindow({
		width: 1000,
		height: 600,
		minWidth: 800,
		minHeight: 250,
		frame: false,
		autoHideMenuBar: true,
		icon: path.join(__dirname, "Styles\\Images\\Icons\\ipswitch.ico"),
		webPreferences: {
			preload: path.join(__dirname, "Modules\\preload.js"),
		},
	});

	//Open developer tools
	mainWindow.webContents.openDevTools();

	//Electron reload
	//mainWindow.reload();

	//Load Index.html
	mainWindow.loadFile(path.join(__dirname, "HTML\\index.html"));
};

// Render window
app.whenReady().then(() => {
	createWindow();
});

// Check Admin rights
exec("NET SESSION", function (err, so, se) {
	userRights = se.length === 0 ? true : false;
});

// Get network adapters
exec("cmd /c chcp 65001>nul && netsh interface ipv4 show addresses", (error, stdout, stderr) => {
	// Variables
	let index = 0;
	let lastIndex = 0;
	let indexes = [];

	// Get network names indeces
	while (index < stdout.length) {
		lastIndex = stdout.indexOf('"', index);
		indexes.push(lastIndex + 1);
		index = lastIndex + 1;
		if (lastIndex == -1) {
			break;
		}
	}

	// Substring network names
	let substring = "";
	for (let i = 0; i < indexes.length - 1; i = i + 2) {
		substring = stdout.substring(indexes[i], indexes[i + 1] - 1);
		adapters.push(substring);
	}
});

//----Inter Process Comunication----

// Request user rights
ipcMain.on("requestRights", (evt, arg) => {
	mainWindow.webContents.send("sendRights", userRights);
});

// Close app
ipcMain.on("close", (evt, arg) => {
	app.quit();
});

// Maximize app
ipcMain.on("maximize", (evt, arg) => {
	if (mainWindow.isMaximized()) {
		mainWindow.unmaximize();
	} else {
		mainWindow.maximize();
	}
});

// Minimize app
ipcMain.on("minimize", (evt, arg) => {
	mainWindow.minimize();
});

// Save JSON file (write data)
ipcMain.on("saveJSON", (evt, arg) => {
	// Variable
	let data = [];

	//If JSON exist, read data
	if (jetpack.exists(path.join(__dirname, "Data\\data.json")) == "file") {
		data = jetpack.read(path.join(__dirname, "Data\\data.json"), "json");
	}

	//Update data
	data.push(arg);

	//Write new JSON
	jetpack.write(path.join(__dirname, "Data\\data.json"), data);
});

// Overwrite JSON file (write data)
ipcMain.on("overwriteJSON", (evt, arg) => {
	//Write new JSON
	jetpack.write(path.join(__dirname, "Data\\data.json"), arg);
});

// Read JSON file (update data)
ipcMain.on("requestData", (evt, arg) => {
	// If JSON exists, read data
	if (jetpack.exists(path.join(__dirname, "Data\\data.json"), "json") == "file") {
		let data = jetpack.read(path.join(__dirname, "Data\\data.json"), "json");

		// Send file data to renderer process
		mainWindow.webContents.send("updateData", data);
	}
});

// Send adapter list to renderer
ipcMain.on("requestAdapters", (evt, arg) => {
	mainWindow.webContents.send("sendAdapters", adapters);
});

// Change active network
ipcMain.on("changeNetwork", (evt, arg) => {
	if (arg.DHCP == true) {
		exec(
			"cmd /c chcp 65001>nul && netsh interface ipv4 set address " + arg.adapter + " dhcp",
			(error, stdout, stderr) => {}
		);
	} else {
		exec(
			"cmd /c chcp 65001>nul && netsh interface ipv4 set address " +
				arg.adapter +
				" static " +
				arg.ipAddress +
				" " +
				arg.subnet +
				" " +
				arg.gateway,
			(error, stdout, stderr) => {}
		);
	}
});

// Get network adapter info
ipcMain.on("requestAdapterInfo", (evt, arg) => {
	// Variables
	let info = {
		dhcp: false,
		ip: "",
		subnet: "",
		gateway: "",
	};

	// Get adapter list
	network.get_interfaces_list(function (err, list) {
		// Get current adapter info
		for (let i = 0; i < list.length; i++) {
			// If current adapter get data
			if (list[i].name == arg) {
				info.ip = list[i].ip_address;
				info.subnet = list[i].netmask;
				info.gateway = list[i].gateway_ip;
			}
		}

		// Get DHCP
		exec(
			"cmd /c chcp 65001>nul && netsh interface ipv4 show addresses " + arg + " | findstr DHCP",
			(error, stdout, stderr) => {
				let index = stdout.indexOf(":") + 1;
				for (let i = index; i < stdout.length; i++) {
					if (stdout[i] != " " && (stdout[i] == "S" || stdout[i] == "Y")) {
						info.dhcp = true;
					}
				}

				// Send info to renderer process
				mainWindow.webContents.send("sendAdapterInfo", info);
			}
		);
	});
});
