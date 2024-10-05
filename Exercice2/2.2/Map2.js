function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: { lat: 48.95930033308523, lng: 2.5477890651742516 },
  });

  setMarkers(map);
}
const beaches = [
  ["1", 48.95930033308523, 2.5477890651742516, 4],
  ["2", 48.95901659236071, 2.544364368005043 , 5],
  ["3", 48.96083250510581, 2.5428194730675138, 3],
  ["4", 48.96334006261106, 2.5503223316267305, 2],
  ["5", 48.96146800531762, 2.553135524155863 , 1],
];

function setMarkers(map) {
  const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly",
  };

  for (let i = 0; i < beaches.length; i++) {
    const beach = beaches[i];

    new google.maps.Marker({
      position: { lat: beach[1], lng: beach[2] },
      map,
      shape: shape,
      title: beach[0],
      zIndex: beach[3],
    });
  }
}

window.initMap = initMap;