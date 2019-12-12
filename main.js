let div1 = document.createElement('div');
div1.className = "demo";
document.body.appendChild(div1);

console.log(1)
var dragging = false;
var lastX, lastY;
div1.onmousedown = function (e) {
    // console.log('原始位置')
    // console.log(e.clientX, e.clientY)
    lastX = e.clientX
    lastY = e.lastY
    dragging = true

}
div1.onmouseup = function () {
    dragging = false
}
document.body.onmousemove = function (e) {
    // console.log(dragging)
    if (dragging === true) {
        // console.log(e.clientX, e.clientY)
        var deltaX = e.clientX - lastX
        var deltaY = e.clientY - lastY
        var top = parseInt(div1.style.top) || 0
        var left = parseInt(div1.style.left) || 0
        var resultY = top + deltaY
        var resultX = left + deltaX
        if (resultX < 0) {
            resultX = 0
        }
        if (resultY < 0) {
            resultY = 0
        }
        div1.style.top = resultY + 'px'
        div1.style.left = resultX + 'px'
        lastX = e.clientX
        lastY = e.clientY
    }

}
