import './general';
import './navbar';
import changeNavbar from './navbar';

// this function gets called to draw the map on the page
export function initMap() {

  // change the lat and lng to eugene
  // experiment with the zoom value
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat:44.052743, lng: -123.09317}  //CHANGE
  });

  // change the lat and lng to eugene
  const marker = new google.maps.Marker({
    map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: 44.0527, lng:-123.09317}
  });

  marker.addListener('click', () => {
    infowindow.open(map,marker);
  });

  // put some useful info about the event here
  const infowindow = new google.maps.InfoWindow({
      content: "<h3>Hult Center for the Performing Arts</h3><p>1 Eugene Center, Eugene, OR 97401</p>"
  });

  infowindow.open(map,marker);
}

// makes the function initMap available globally - without window object in the added script
window.initMap = initMap;

window.addEventListener("load", () => {
  const $script = document.createElement('script');
  // the google maps api has to look exactly like this except for the callback
  $script.src = `https://maps.googleapis.com/maps/api/js?key=${GMAP_KEY}&callback=initMap`;
  document.querySelector('body').appendChild($script);
});

window.onload = document.getElementById("navbar").innerHTML = changeNavbar("About");
