const { app, contextBridge, ipcRenderer } = require("electron");

window.addEventListener("DOMContentLoaded", () => {
	contextBridge.exposeInMainWorld("electron", {
		close: () => ipcRenderer.send("close"),
		maximize: () => ipcRenderer.send("maximize"),
		minimize: () => ipcRenderer.send("minimize"),
		saveJSON: (data) => ipcRenderer.send("saveJSON", data),
		overwriteJSON: (data) => ipcRenderer.send("overwriteJSON", data),
		requestData: () => ipcRenderer.send("requestData"),
		receiveData: (data) => {
			ipcRenderer.once("updateData", data);
		},
		requestAdapters: () => ipcRenderer.send("requestAdapters"),
		receiveAdapters: (adapters) => {
			ipcRenderer.once("sendAdapters", adapters);
		},
		requestAdapterInfo: (adapter) => ipcRenderer.send("requestAdapterInfo", adapter),
		receiveAdapterInfo: (adapterInfo) => {
			ipcRenderer.once("sendAdapterInfo", adapterInfo);
		},
		changeNetwork: (network) => ipcRenderer.send("changeNetwork", network),
		requestRights: () => ipcRenderer.send("requestRights"),
		receiveRights: (rights) => {
			ipcRenderer.once("sendRights", rights);
		},
	});
	ipcRenderer.setMaxListeners(1);
});
