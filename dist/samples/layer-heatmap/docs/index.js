/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_layer_heatmap]
// This example requires the Visualization library. Include the libraries=visualization
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization">
let map, heatmap;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: -37.821, lng: 144.984 },
    mapTypeId: "satellite",
  });
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map,
  });
  document
    .getElementById("toggle-heatmap")
    .addEventListener("click", toggleHeatmap);
  document
    .getElementById("change-gradient")
    .addEventListener("click", changeGradient);
  document
    .getElementById("change-opacity")
    .addEventListener("click", changeOpacity);
  document
    .getElementById("change-radius")
    .addEventListener("click", changeRadius);
}

function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
  const gradient = [
    "rgba(0, 255, 255, 0)",
    "rgba(0, 255, 255, 1)",
    "rgba(0, 191, 255, 1)",
    "rgba(0, 127, 255, 1)",
    "rgba(0, 63, 255, 1)",
    "rgba(0, 0, 255, 1)",
    "rgba(0, 0, 223, 1)",
    "rgba(0, 0, 191, 1)",
    "rgba(0, 0, 159, 1)",
    "rgba(0, 0, 127, 1)",
    "rgba(63, 0, 91, 1)",
    "rgba(127, 0, 63, 1)",
    "rgba(191, 0, 31, 1)",
    "rgba(255, 0, 0, 1)",
  ];

  heatmap.set("gradient", heatmap.get("gradient") ? null : gradient);
}

function changeRadius() {
  heatmap.set("radius", heatmap.get("radius") ? null : 50);
}

function changeOpacity() {
  heatmap.set("opacity", heatmap.get("opacity") ? null : 0.2);
}

// Heatmap data: 500 Points
function getPoints() {
  return [
    {
      location: new google.maps.LatLng(-37.80221109, 144.9371946),
      weight: 3680,
    },
    {
      location: new google.maps.LatLng(-37.81629722, 144.974382),
      weight: 3688,
    },
    {
      location: new google.maps.LatLng(-37.80244732, 144.9014715),
      weight: 986.227,
    },
    {
      location: new google.maps.LatLng(-37.80244732, 144.90147149),
      weight: 440.821,
    },
    {
      location: new google.maps.LatLng(-37.79978956, 144.8654704),
      weight: 592,
    },
    {
      location: new google.maps.LatLng(-37.78729643, 144.8311164),
      weight: 648,
    },
    {
      location: new google.maps.LatLng(-37.76370982, 144.8144574),
      weight: 556,
    },
    {
      location: new google.maps.LatLng(-37.73232181, 144.7948722),
      weight: 476,
    },
    {
      location: new google.maps.LatLng(-37.69715267, 144.7707035),
      weight: 324,
    },
    {
      location: new google.maps.LatLng(-37.67900298, 144.7565253),
      weight: 640,
    },
    { location: new google.maps.LatLng(-37.5836377, 144.7245219), weight: 544 },
    {
      location: new google.maps.LatLng(-37.79823279, 144.9941609),
      weight: 1248,
    },
    {
      location: new google.maps.LatLng(-37.78765056, 144.9957598),
      weight: 2432,
    },
    {
      location: new google.maps.LatLng(-37.68257244, 145.0141223),
      weight: 543.439,
    },
    {
      location: new google.maps.LatLng(-37.65383306, 145.025855),
      weight: 1213.298,
    },
    {
      location: new google.maps.LatLng(-37.82755554, 145.0097715),
      weight: 3077.385,
    },
    {
      location: new google.maps.LatLng(-37.81405994, 145.2343948),
      weight: 3248,
    },
    { location: new google.maps.LatLng(-37.79620023, 145.279582), weight: 154 },
    {
      location: new google.maps.LatLng(-37.77465484, 145.3310458),
      weight: 352,
    },
    {
      location: new google.maps.LatLng(-37.75257543, 145.3503305),
      weight: 564,
    },
    {
      location: new google.maps.LatLng(-37.83066599, 144.9941321),
      weight: 1522.978,
    },
    { location: new google.maps.LatLng(-38.01676695, 145.094555), weight: 744 },
    {
      location: new google.maps.LatLng(-38.10255946, 145.1280295),
      weight: 708,
    },
    {
      location: new google.maps.LatLng(-38.14513402, 145.1254626),
      weight: 664,
    },
    { location: new google.maps.LatLng(-37.917795, 145.111687), weight: 420 },
    { location: new google.maps.LatLng(-37.7844259, 144.9258845), weight: 768 },
    {
      location: new google.maps.LatLng(-37.7019853, 144.9166508),
      weight: 1728,
    },
    {
      location: new google.maps.LatLng(-37.66271098, 144.9252781),
      weight: 544,
    },
    {
      location: new google.maps.LatLng(-37.63811079, 144.9349908),
      weight: 492,
    },
    {
      location: new google.maps.LatLng(-37.59848811, 144.9444385),
      weight: 404,
    },
    {
      location: new google.maps.LatLng(-37.59848811, 144.94443846),
      weight: 1296,
    },
    {
      location: new google.maps.LatLng(-37.59848811, 144.94443846),
      weight: 88,
    },
    {
      location: new google.maps.LatLng(-37.70285742, 145.1072298),
      weight: 396,
    },
    {
      location: new google.maps.LatLng(-37.71484626, 145.1344832),
      weight: 256,
    },
    {
      location: new google.maps.LatLng(-37.70932387, 145.1489989),
      weight: 244,
    },
    {
      location: new google.maps.LatLng(-37.66319946, 145.182265),
      weight: 85.6,
    },
    {
      location: new google.maps.LatLng(-37.64092554, 145.1911825),
      weight: 357.123,
    },
    {
      location: new google.maps.LatLng(-37.87891661, 145.2941853),
      weight: 444,
    },
    {
      location: new google.maps.LatLng(-37.90525505, 145.3338366),
      weight: 560,
    },
    { location: new google.maps.LatLng(-37.86374868, 144.994474), weight: 984 },
    { location: new google.maps.LatLng(-37.9133461, 144.9980541), weight: 592 },
    {
      location: new google.maps.LatLng(-37.93594176, 144.9987875),
      weight: 790,
    },
    {
      location: new google.maps.LatLng(-38.04544695, 145.2436032),
      weight: 244,
    },
    {
      location: new google.maps.LatLng(-38.10134235, 145.2835957),
      weight: 368,
    },
    {
      location: new google.maps.LatLng(-37.68567248, 144.9557255),
      weight: 501,
    },
    {
      location: new google.maps.LatLng(-37.82149831, 144.8880556),
      weight: 592,
    },
    { location: new google.maps.LatLng(-37.84774563, 144.882704), weight: 960 },
    {
      location: new google.maps.LatLng(-37.84775563, 144.88270396),
      weight: 80,
    },
    {
      location: new google.maps.LatLng(-37.84809294, 144.8575978),
      weight: 594,
    },
    { location: new google.maps.LatLng(-37.8625521, 144.7776216), weight: 616 },
    {
      location: new google.maps.LatLng(-37.88441518, 144.6977103),
      weight: 616,
    },
    {
      location: new google.maps.LatLng(-37.90154437, 144.6564324),
      weight: 240,
    },
    {
      location: new google.maps.LatLng(-37.85330004, 145.0510145),
      weight: 708,
    },
    {
      location: new google.maps.LatLng(-37.87750076, 145.0735967),
      weight: 409.401,
    },
    {
      location: new google.maps.LatLng(-37.87543191, 145.1246623),
      weight: 696,
    },
    {
      location: new google.maps.LatLng(-37.87924625, 145.1608423),
      weight: 480,
    },
    {
      location: new google.maps.LatLng(-37.86476707, 144.8103275),
      weight: 209.788,
    },
    {
      location: new google.maps.LatLng(-37.86795292, 144.9064117),
      weight: 218,
    },
  ];
}

window.initMap = initMap;
// [END maps_layer_heatmap]
