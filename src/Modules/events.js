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
	// Change search text
	const input = $(".search").on("keyup", function () {
		//Get text
		let text = $(".search").val();
		updateSearch(text);
	});
});
