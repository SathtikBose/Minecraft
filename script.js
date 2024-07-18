function changeClass(className) {
    var heading = document.getElementById('hero');
    heading.className = className;
}
function showVideo(videoUrl, buttonElement) {
    document.getElementById('video-frame').src = videoUrl;
    var buttons = document.getElementsByClassName('video-button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    buttonElement.classList.add('active');
}
window.onload = function() {
    var defaultButton = document.getElementById('button1');
    showVideo('https://www.youtube.com/embed/0Cbw1b2mkGk?si=yGJWFblZgKbBbBg2', defaultButton);
};
