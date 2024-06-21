
function toggleLight(light) {
    var lights = document.getElementsByClassName('light');

    for (var i = 0; i < lights.length; i++) {
        lights[i].style.opacity = '0.2';     
    }

    light.style.opacity = '1'
}

