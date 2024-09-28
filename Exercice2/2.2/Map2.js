                                                                  // The following example creates complex markers to indicate beaches near
                                                                  // Sydney, NSW, Australia. Note that the anchor is set to (0,32) to correspond
                                                                  // to the base of the flagpole.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: { lat: 48.95930033308523, lng: 2.5477890651742516 },
  });

  setMarkers(map);
}

                                                                  // Data for the markers consisting of a name, a LatLng and a zIndex for the
                                                                  // order in which these markers should display on top of each other.
const beaches = [
  ["1", 48.95930033308523, 2.5477890651742516, 4],
  ["2", 48.95901659236071, 2.544364368005043 , 5],
  ["3", 48.96083250510581, 2.5428194730675138, 3],
  ["4", 48.96334006261106, 2.5503223316267305, 2],
  ["5", 48.96146800531762, 2.553135524155863 , 1],
];

function setMarkers(map) {
                                                                  // Adds markers to the map.
                                                                  // Marker sizes are expressed as a Size of X,Y where the origin of the image
                                                                  // (0,0) is located in the top left of the image.
                                                                  // Origins, anchor positions and coordinates of the marker increase in the X
                                                                  // direction to the right and in the Y direction down.

                                                                                                                            // Shapes define the clickable region of the icon. The type defines an HTML
                                                                                                                            // <area> element 'poly' which traces out a polygon as a series of X,Y points.
                                                                                                                            // The final coordinate closes the poly by connecting to the first coordinate.
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