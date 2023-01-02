window.addEventListener("DOMContentLoaded", () => {
	//Close button
	$(".close").click(function () {
		window.electron.close();
	});
	//Maximize button
	$(".maximize").click(function () {
		window.electron.maximize();
	});
	//Minimize button
	$(".minimize").click(function () {
		window.electron.minimize();
	});
});
