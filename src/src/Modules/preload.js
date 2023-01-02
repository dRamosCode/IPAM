const { app, contextBridge, ipcRenderer } = require("electron");

window.addEventListener("DOMContentLoaded", () => {
	contextBridge.exposeInMainWorld("electron", {
		close: () => ipcRenderer.send("close"),
		maximize: () => ipcRenderer.send("maximize"),
		minimize: () => ipcRenderer.send("minimize"),
		saveJSON: (data) => ipcRenderer.send("saveJSON", data),
		requestData: () => ipcRenderer.send("requestData"),
		receiveData: (data) => {
			ipcRenderer.on("updateData", data);
		},
		requestAdapters: () => ipcRenderer.send("requestAdapters"),
		receiveAdapters: (adapters) => {
			ipcRenderer.on("sendAdapters", adapters);
		},
		changeNetwork: (network) => ipcRenderer.send("changeNetwork", network),
	});
});
