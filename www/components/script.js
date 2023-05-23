/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: { lat: 40.731, lng: -73.997 },
    });
    const geocoder = new google.maps.Geocoder();
    const infowindow = new google.maps.InfoWindow();
  
    document.getElementById("submit").addEventListener("click", () => {
      geocodeLatLng(geocoder, map, infowindow);
    });
  }
  
  function geocodeLatLng(geocoder, map, infowindow) {
    const input = document.getElementById("latlng").value;
    const latlngStr = input.split(",", 2);
    const latlng = {
      lat: parseFloat(latlngStr[0]),
      lng: parseFloat(latlngStr[1]),
    };
  
    geocoder
      .geocode({ location: latlng })
      .then((response) => {
        if (response.results[0]) {
          map.setZoom(11);
  
          const marker = new google.maps.Marker({
            position: latlng,
            map: map,
          });
  
          infowindow.setContent(response.results[0].formatted_address);
          infowindow.open(map, marker);
        } else {
          window.alert("No results found");
        }
      })
      .catch((e) => window.alert("Geocoder failed due to: " + e));
  }
  
  window.initMap = initMap;


  function Localização() {
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    } else {
    document.getElementById("demo").innerHTML = "Geolocalização não é suportada pelo seu navegador.";
    }
    }
    
    function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    
    document.getElementById("demo").innerHTML = "Latitude: " + latitude + "<br>Longitude: " + longitude;
    }

    document.getElementById("get-location").addEventListener("click", () => {
        Localização();
      });
      
      function Localização() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else {
          document.getElementById("demo").innerHTML = "Geolocalização não é suportada pelo seu navegador.";
        }
      }
      
      function showPosition(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
      
        var latlngInput = document.getElementById("latlng");
        latlngInput.value = latitude + "," + longitude;
      }
      