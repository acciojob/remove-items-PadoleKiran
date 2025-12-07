//your JS code here. If required.
let colorSelect = document.getElementById("colorSelect");
let btn = document.getElementById("btn");

btn.onclick = function() {
	let ind = colorSelect.selectedIndex;
	colorSelect.remove(ind);
}