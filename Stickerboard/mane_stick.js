/**
 * Created by НИКОЛАЙ on 03.09.2016.
 */
var sticker = (function(){

    var desktop,
        activeSticker,
        zIndexCount = 1,
        shiftX,
        shiftY,
        divSticker = "\
		<button class='sticker_button'>x</button>\
		<input class='sticker_input' />\
	";

    document.addEventListener('DOMContentLoaded', init, false);

    function init(){
        desktop = document.body;
        desktop.addEventListener('dblclick', addSticker, false);
        desktop.addEventListener('mousedown', mousedown, false);
        document.addEventListener('mousemove', mousemove, false);
        desktop.addEventListener('mouseup', mouseup, false);
        desktop.addEventListener('click', deleteSticker, false);
    }

    function addSticker(e){
        if(e.target == desktop)
        {
            var temp_sticker = document.createElement('div');
            temp_sticker.className = 'sticker_body';
            temp_sticker.innerHTML = divSticker;
            temp_sticker.ondragstart = function(){
                return false;
            };
            desktop.appendChild(temp_sticker);
            temp_sticker.style.left = e.pageX - temp_sticker.offsetWidth / 2 + 'px';
            temp_sticker.style.top = e.pageY - temp_sticker.offsetHeight / 2 + 'px';
        }
    }

    function mousedown(e){
        var activeElement = e.target;
        if(activeElement.className == 'sticker_body'){
            activeSticker = activeElement;
            shiftX = e.pageX - parseInt(activeSticker.style.left);
            shiftY = e.pageY - parseInt(activeSticker.style.top);
            activeSticker.style.zIndex = zIndexCount++;
        }
    }

    function mousemove(e){
        if(activeSticker){
            activeSticker.style.left = e.pageX - shiftX + 'px';
            activeSticker.style.top = e.pageY - shiftY + 'px';
        }
    }

    function mouseup(){
        activeSticker = null;
    }

    function deleteSticker(e){
        var activeElement = e.target;
        if(activeElement.className == 'sticker_button'){
            activeElement.parentNode.remove();
        }
    }

}());

