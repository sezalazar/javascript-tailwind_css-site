const btnDelete = document.querySelectorAll('.btn-delete')

if (btnDelete){
    const btnArray = Array.from(btnDelete)
    btnArray.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            if(!confirm('Are you sure you want to delete it?')){
                e.preventDefault()
            }
        })
    })
}







// var map;
// var ajaxRequest;
// var plotlist;
// var plotlayers=[];

// // Init Open Street Maps
// function initmap() {
//     // set up the map
//     map = new L.Map('map');
//     var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
//     var osmAttrib='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
//     var osm = new L.TileLayer(osmUrl, {minZoom: 2, maxZoom: 19, attribution: osmAttrib});
//     map.setView(new L.LatLng(-34.64657105382906, -58.62012760229702),15);
//     map.addLayer(osm);

//     var marker = L.marker([-34.64657105382906, -58.62012760229702]).addTo(map);
//     marker.bindPopup("<b>Universidad de Moron</b><br>is here").openPopup();
// }

// initmap();
