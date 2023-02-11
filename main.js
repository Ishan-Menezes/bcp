const customization_input = document.querySelector("#customization_input");
const customization_output = document.querySelector("#customization_output");
const default_text = "The Rizzler";

init();

function init() {
	let text = sessionStorage.getItem("text");
	if (text == null || text.length == 0)
		text = default_text;
	else
		customization_input.value = text;

	customization_output.textContent = text;
}

function update_text() {
	const text = customization_input.value;

	if (text.length == 0)
		text = default_text

	sessionStorage.setItem("text", text);
	customization_output.textContent = text;
}

function update_rotation() {
	angle = (
		document
			.querySelector("#rotation_slider")
			.value
	);
	document.querySelector("#preview").style.transform = `rotate(${angle}deg)`;
}

function buy() {
	let text = customization_input.value;
	sessionStorage.setItem("text", text);

	if (text.length == 0)
		text = default_text;

	new_page_link = `https://docs.google.com/forms/d/e/1FAIpQLSdlKV-BTigb_wjBhug6vJKieOikpwyijXOf6YS2CmHdvRtz7g/viewform?usp=pp_url&entry.691033026=${text}`
	window.location.replace(new_page_link);
}
