var captionLength = 0;
var caption = '';
var interval = null;

function setCursorAnimation() {
    clearInterval(interval);
    interval = setInterval ('cursorAnimation()', 600);
}


$(document).ready(function() {
    //setCursorAnimation();
    captionEl = $('#text');

    setTimeout('testTypingEffect()', 2000);

});

function testTypingEffect() {
    caption = 'Yet another web developer :)';
    type();
}

function type() {
    captionEl.html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1) {
        setTimeout('type()', 50);
    } else {
        //setCursorAnimation();
        captionLength = 0;
        caption = '';
    }
}

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
            opacity: 1
        }, 'fast', 'swing');
}