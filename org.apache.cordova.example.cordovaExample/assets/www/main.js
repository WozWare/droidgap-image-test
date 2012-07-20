function start() {
	console.log("in start");
	totalImages = 550;
	currentImage = 1;
	//change to false to insert/remove images rather than switching src.
	if (false/* false */) {
		jQuery("#maindiv").prepend("<img id='theimage'>");
		setTimeout(updateImage, 1000);
	} else {
		setTimeout(insertImage, 1000);
	}
}
function init() {
	console.log("in init");
	document.addEventListener("deviceready", start, true);
}

function updateImage() {
	if (currentImage <= totalImages) {
		console.log("updating image:" + currentImage);
		jQuery("#theimage")[0].src = "numbers/" + currentImage + ".png";
		currentImage++;
		setTimeout(updateImage, 50);
	}
}

function insertImage() {
	console.log("inserting image:" + currentImage);
	jQuery("#maindiv").prepend(
		"<img id='theimage' src='numbers/" + currentImage + ".png'>");
	setTimeout(deleteImage, 50);
}

function deleteImage() {
	console.log("removing image:" + currentImage);
	jQuery("#theimage").remove();
	currentImage++;
	if (currentImage <= totalImages) 
		insertImage();
	
}