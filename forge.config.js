module.exports = {
	packagerConfig: {
		icon: "./src/Styles/Images/Icons/ipswitch",
	},
	rebuildConfig: {},
	makers: [
		{
			name: "@electron-forge/maker-squirrel",
			config: {
				iconUrl:
					"https://raw.githubusercontent.com/dRamosCode/IPAM/master/src/Styles/Images/Icons/ipswitch.ico?token=GHSAT0AAAAAACAGZH624LS4NNCTCFO5JR4MZAV4YKA",
				setupIcon: "src/Styles/Images/Icons/ipswitch.ico",
			},
		},
		{
			name: "@electron-forge/maker-zip",
			platforms: ["darwin"],
		},
		{
			name: "@electron-forge/maker-deb",
			config: {},
		},
		{
			name: "@electron-forge/maker-rpm",
			config: {},
		},
	],
	publishers: [
		{
			name: "@electron-forge/publisher-github",
			config: {
				repository: {
					owner: "dRamosCode",
					name: "IPAM",
				},
				prerelease: false,
				draft: true,
			},
		},
	],
};
