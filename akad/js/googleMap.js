function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(46.469391, 30.740883),
        zoom: 17
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
}