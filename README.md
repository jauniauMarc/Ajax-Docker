# README

## Lancer le conteneur Docker

Pour lancer le conteneur Docker avec Nginx, utilisez la commande suivante :

```bash
docker run --name Ajax -p 8080:80 -v ./:/usr/share/nginx/html -d mtobji/custom-nginx
```

Cette commande effectue les actions suivantes :
- **--name Ajax** : Attribue le nom "Ajax" au conteneur.
- **-p 8080:80** : Redirige le port 8080 de l'hôte vers le port 80 du conteneur.
- **-v ./:/usr/share/nginx/html** : Monte le répertoire courant dans le conteneur, permettant à Nginx d'accéder à vos fichiers.
- **-d** : Exécute le conteneur en arrière-plan.
- **mtobji/custom-nginx** : Utilise l'image Docker spécifiée.

---

## 1. Le format JSON et son exploitation en JavaScript

### Itérer sur un objet CD

Réponse 1.1 :

Dans la console :

```javascript
> CDs = JSON.parse(CD)
> for (let key in CDs)
    console.log(key + ":" + CDs[key])
```

### Itérer sur un tableau de CDs

### Réponse 1.2 :

Dans la console :

```javascript
success: function(CDs){

            for (let i = 0; i < CDs.length; i++) {
                console.log('CD[' + i + ']=');
                for (let key in CDs[i]) {
                    console.log(key + ': ' + CDs[i][key]);  
                }
            }
        }
```

---

## Requête asynchrone

### Réponse 1.3 :
```javascript
success: function(CDs){
            for (let i = 0; i < CDs.length; i++) {
                console.log('CD[' + i + ']=');
                for (let key in CDs[i]) {
                    console.log(key + ': ' + CDs[i][key]);  
                }
            }
        }
```
## Affichage d’une Map avec l’API Google Maps

### Map avec un marker

### Réponse 2.1 :

URL : ``` http://localhost:8080/Exercice2/2.1/Map.html```

```javascript
function initMap() {
    const myLatLng = { lat: 48.960488945948185, lng: 2.5478907124310757 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: myLatLng,
    });
  
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Hello World!",
    });
  }
  
  window.initMap = initMap;
```

### Map avec plusieurs marqueurs

### Réponse 2.2 :

URL : ```http://localhost:8080/Exercice2/2.2/Map2.html```

```javascript
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
```

### Réponse 2.3 :

URL : ```http://localhost:8080/Exercice2/2.3/Map3.html```

```javascript
function loadDoc() {
        $.ajax({
            url: "http://localhost:8080/Exercice2/2.3/Marker.json",
            method: "GET",
            dataType: "JSON",
            success: function (markers) {
                for (let i = 0; i < markers.length; i++) {
                    console.log('markers N°[' + i + ']=');
                    for (let key in markers[i]) {
                        console.log(key + ' : ' + markers[i][key]);
                    }
                }

                initMap(markers);
            }
        });
    }

    function initMap(markers) {       
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: { lat: 48.95930033308523, lng: 2.5477890651742516 },
            
        });

        for (let i = 0; i < markers.length; i++) {
            new google.maps.Marker({
                position: { lat: markers[i].lat, lng: markers[i].lng },
                map: map,
            });
        }
    

  /*relier les maqueurs*/ 
  const flightPath = new google.maps.Polyline({
    path: markers,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  /*afficher les lignes*/
  flightPath.setMap(map);
}  

    window.initMap = initMap;
</script>
```

### Markers enrichis

### Réponse 3.1 :

URL : ```http://localhost:8080/Exercice3/3/Map3.html```

```javascript
function loadDoc() {
        $.ajax({
            url: "http://localhost:8080/Exercice2/3/Marker.json",
            method: "GET",
            dataType: "JSON",
            success: function (markers) {
                for (let i = 0; i < markers.length; i++) {
                    console.log('markers N°[' + i + ']=');
                    for (let key in markers[i]) {
                        console.log(key + ' : ' + markers[i][key]);
                    }
                }

                initMap(markers);
            }
        });
    }

    async function initMap(markers) {
        const { Map, InfoWindow } = await google.maps.importLibrary("maps");
        const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
            "marker",
        );        
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: { lat: 48.95930033308523, lng: 2.5477890651742516 },
            
        });

        for (let i = 0; i < markers.length; i++) {
            new google.maps.Marker({
                position: { lat: markers[i].lat, lng: markers[i].lng },
                map: map,
            });
        }
    

  /*relier les maqueurs*/ 
  const flightPath = new google.maps.Polyline({
    path: markers,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  /*afficher les lignes*/
  flightPath.setMap(map);

  const infoWindow = new InfoWindow();

// Create the markers.
markers.forEach((markerData, index) => {
            const marker = new google.maps.Marker({
                position: { lat: markerData.lat, lng: markerData.lng },
                map: map,
                title: markerData.title
            });


  // Add a click listener for each marker, and set up the info window.
  marker.addListener("click", () => {
    infoWindow.setContent(marker.title);
    infoWindow.open(map, marker);
  });
});
}    

    window.initMap = initMap;
</script>
```
Marker.json :

```json
[
  {
    "title": "Point 1",
    "lat": 48.95930033308523,
    "lng": 2.5477890651742516
  },
  {
    "title": "Point 2",
    "lat": 48.95901659236071,
    "lng": 2.544364368005043
  },
  {
    "title": "Point 3",
    "lat": 48.96083250510581,
    "lng": 2.5428194730675138
  },
  {
    "title": "Point 4",
    "lat": 48.96334006261106,
    "lng": 2.5503223316267305
  },
  {
    "title": "Point 5",
    "lat": 48.96146800531762,
    "lng": 2.553135524155863
  },
  {
    "title": "Point 6",
    "lat": 48.95997156116078,
    "lng": 2.548567662388221
  }
]
```

### Réponse 3.2 :

URL : ```http://localhost:8080/Exercice3/3.2/Map3.html```

```javascript
function loadDoc() {
            $.ajax({
                url: "./Marker.json",
                method: "GET",
                dataType: "JSON",
                success: function (markers) {
                    for (let i = 0; i < markers.length; i++) {
                        console.log('markers N°[' + i + ']=');
                        for (let key in markers[i]) {
                            console.log(key + ' : ' + markers[i][key]);
                        }
                    }

                    initMap(markers);
                }
            });
        }

        async function initMap(markers) {
            const { Map, InfoWindow } = await google.maps.importLibrary("maps");
            const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
                "marker",
            );
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 5,
                center: { lat: 48.95930033308523, lng: 2.5477890651742516 },

            });


            /*relier les maqueurs*/
            const flightPath = new google.maps.Polyline({
                path: markers,
                geodesic: true,
                strokeColor: "#FF0000",
                strokeOpacity: 1.0,
                strokeWeight: 2,
            });

            /*afficher les lignes*/
            flightPath.setMap(map);

            // Create the markers.
            markers.forEach((markerData, index) => {
                const marker = new google.maps.Marker({
                    position: { lat: markerData.lat, lng: markerData.lng },
                    map: map,
                    title: markerData.title
                })

                const France =
                    '<div id="content">' +
                    '<div id="siteNotice">' +
                    "</div>" +
                    '<h1 id="firstHeading" class="firstHeading">France <--> Canada</h1>' +
                    '<div id="bodyContent">' +
                    "<p><b>La France</b> est un pays situé en Europe de l'Ouest, connu pour sa riche histoire, son art et sa culture. La capitale, Paris, est célèbre pour ses monuments emblématiques tels que la Tour Eiffel et le Musée du Louvre. La France est également réputée pour ses traditions culinaires, sa mode et ses paysages magnifiques, allant des champs de lavande de Provence aux sommets enneigés des Alpes.</p>" +
                    "<p><b>Le Canada</b>, quant à lui, est le deuxième plus grand pays du monde, situé en Amérique du Nord. Il est connu pour sa culture diversifiée, ses paysages naturels époustouflants et sa population accueillante. Les grandes villes comprennent Toronto, Vancouver et Montréal, chacune offrant des attractions uniques, comme la Tour CN et le vieux Montréal. Le Canada est célèbre pour ses parcs nationaux, ses lacs magnifiques et les aurores boréales.</p>" +
                    '<p>Les deux pays partagent une relation étroite, avec des liens historiques, des échanges culturels et un partenariat solide dans divers domaines internationaux.</p>' +
                    "</div>" +
                    "</div>";
                const infowindow = new google.maps.InfoWindow({
                    content: France,
                    ariaLabel: "Uluru",
                });

                marker.addListener("click", () => {
                    infowindow.open({
                        anchor: marker,
                        map,
                    });
                });
            });
        }

        window.initMap = initMap;
    </script>
```

Marker.json
```json
[
  {
    "title": "France",
    "lat": 48.932913972672104,
    "lng": 2.4551102866176144
  },
  {
    "title": "Canada",
    "lat": 52.4760892,
    "lng": -71.8258668
  }
]
```

# Points a tirer
## Comprehension des points clés utilisés 
- Exécution de Conteneurs Docker [######----] 50%
- Utilisation du format JSON [#########-] 90%
- Requêtes asynchrones [######----] 60%
- Intégration avec Google Maps [########--] 80%
