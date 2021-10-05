let extremismData; 
let cities;
const mappa = new Mappa('Leaflet');
let trainMap;
let canvas;

const options = {
    lat: 25.34,
    lng: 50.66,
    zoom: 2.5,
    style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function preload() {
    extremismData = loadTable('./media/data.csv', 'header');
    cities = loadJSON('./media/cities.json');
}

function setup(){
    canvas = createCanvas(900,500);
    // console.log('extremismData');
    // background(100);
    trainMap =  mappa.tileMap(options);
    trainMap.overlay(canvas);


    // for (let row of extremismData.rows){
    // // // //     // console.log(row.get('city'));
    // // // //     // console.log(row.get('country'));
    // // // //     // console.log(row.get('number attacks'));
    // // // //     // console.log(row.get('tweets'));
    // }

    // console.log(cities);


}

function draw(){
     clear();
//    const nigeria = trainMap.latLngToPixel(11.396396, 5.076543); 
//     ellipse(nigeria.x, nigeria.y, 20, 20);
    for (let row of extremismData.rows){
        let city = row.get('city');
        // console.log(city);
        let latlon = cities[city];
        if (latlon < 1) {noStroke(); noFill(); }
        else if (latlon){
             let lat = latlon[0];
             let lon = latlon[1];
             const pix = trainMap.latLngToPixel(lat, lon);
             let tweetCount = row.get('tweets');
             let diameter = sqrt(tweetCount) * trainMap.zoom()/2;
             fill(137, 209, 254, 100);
             ellipse(pix.x, pix.y, diameter, diameter);    
    }
}

    // noLoop();

}

