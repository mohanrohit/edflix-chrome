var edflixVm = new EdFlixViewModel();

var addVideoYesButton = document.getElementById("add-video-yes-button");
addVideoYesButton.addEventListener("click", function(event) { edflixVm.onAcceptVideoClicked(event) });

var addVideoNoButton = document.getElementById("add-video-no-button");
addVideoNoButton.addEventListener("click", function(event) { edflixVm.onRejectVideoNoClicked(event) });
