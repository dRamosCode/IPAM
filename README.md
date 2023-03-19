![algo](https://github.com/dRamosCode/IPAM/blob/master/docs/Images/Logo.png?raw=true)

<h1 align="center">Easy to use Ip Address Manager</h1>

![Version](https://img.shields.io/github/package-json/v/dRamosCode/IPAM?style=for-the-badge)
![ReleaseDate](https://img.shields.io/github/release-date/dRamosCode/IPAM?style=for-the-badge)
![Downloads](https://img.shields.io/github/downloads/dRamosCode/IPAM/total?style=for-the-badge)
![License](https://img.shields.io/github/license/dRamosCode/IPAM?style=for-the-badge)

# About

IPswitch is an open source Ip Address Manager (IPAM) desktop app. It helps change computer network adapter configuration easily, by choosing among user created configuration lists.

Thanks to a friendly interface, it allows users to interact with network adapaters easily and avoid the tedious default process the PC offers to change the configuration.

It gets advantage of the CLI, by accessing the active network adapters and reading or writing the configuration.

> Administrator rights must be granted to the app in order to be able to change network adapter configuration via CLI

---

![NewItem](https://github.com/dRamosCode/IPAM/blob/master/docs/Images/Main.png?raw=true)

## Built with

![Electron](https://img.shields.io/badge/Electron-1c1c26?style=for-the-badge&logo=electron)
![React](https://img.shields.io/badge/React-1c1c26?style=for-the-badge&logo=react)
![Jquery](https://img.shields.io/badge/jQuery-0669ad?style=for-the-badge&logo=jquery)
![Fs-jetpack](https://img.shields.io/badge/fs_jetpack-e5e5e5?style=for-the-badge)
![Network](https://img.shields.io/badge/Network-e5e5e5?style=for-the-badge)

# Installation

## Release installer

1. Download the latest release for your OS
2. Install
3. Grant administrator rights to the app
4. Enjoy

## Local development

### Prerequisites

1. Install **Node.js**
2. Install latest version of **npm**

```
npm install -g npm
```

3. Install **Git**

## Clone repository

1. Open the directory where you want your app to be located. The folder must be empty.

2. Clone the repository from Github.

```
git clone https://github.com/dRamosCode/IPAM.git .
```

> The dot is used to clone the repository without creating a new folder.

3. Install `electron`

```
npm install --save electron@latest
```

4. Install all the packages needed to develop and run the app.

> Packages may be installed automatically when installing electron

Your app is ready to continue developing.

## Usage

### Add new adapter configuration

Click on the `New` button and fill the fields to add a new adapter configuration.

![NewItem](https://github.com/dRamosCode/IPAM/blob/master/docs/GIF/NewItem.gif?raw=true)

### Edit existing adapter configuration

Hover over the item and click on the pencil icon under settings. The current configuration will be displayed to be edited.

![Edit](https://github.com/dRamosCode/IPAM/blob/master/docs/GIF/Edit.gif?raw=true)

### Delete item from list

Hover over the item and click on the trash icon under settings. A confirmation popup will be displayed.

![Delete](https://github.com/dRamosCode/IPAM/blob/master/docs/GIF/Delete.gif?raw=true)

### Activate adapter configuration

Change between active adapter configurations by double-clicking the chosen item.

![Activate](https://github.com/dRamosCode/IPAM/blob/master/docs/GIF/Activate.gif?raw=true)

### Search

IpSwitch allows to filter by item name. Any item including the text in its name will be displayed.

> Uppercase and lowercase distinction is enabled.

![Search](https://github.com/dRamosCode/IPAM/blob/master/docs/GIF/Search.gif?raw=true)

# Contributing

Clone repo and create a new branch:

$ git checkout https://github.com/******/**** -b name_for_new_branch.

Make changes and test

Submit Pull Request with comprehensive description of changes

# License

MIT license.
