window.onload = getMyLocation;

function getMyLocation() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(displayLocation);
    } else{
        alert("Ouch! Your browser does not support geolocation.");
    }
}