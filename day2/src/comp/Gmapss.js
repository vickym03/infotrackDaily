

// import React from 'react'
// import GoogleMapReact from 'google-map-react'

// let mapOptions = {
//     center: { lat: 39.56939, lng: -40.0000 },
//     zoom: 3.5,
//     disableDefaultUI: true,
//     gestureHandling: 'none',
//     zoomControl: false,
//     scaleControl: false,
//     zoomControlOptions: false,
//     scrollwheel: false,
//     panControl: false,
//   };
// function Gmapss({ data, state }) {

//     console.log(data.models)

//     function initMap() {

//         let markers = [
//          /.../
//         ];

//         function Marker(props) {

//             let marker = new google.maps.marker({
//                 position: props.coords,
//                 content: props.content,
//                 icon: props.icon,
//                 map: map
//             });

//             let infoWindow = new google.maps.InfoWindow({
//                 content: props.content
//             });

//             Marker.addListener('click', function () {
//                 infoWindow.open(map, marker);
//             })
//         }
//     }
//      // useEffect(initMap, []); it will only render once 
//     return (
//         <div style={{height: '100vh', width: '100%' }}>
//             <GoogleMapReact
//                 bootstrapURLKeys={{ key: "YOUR_API_KEY" }}
//                 defaultCenter={{lat: 39.56939, lng: -40.0000 }}
//                 defaultZoom={3.5}
//                 options={mapOptions}
//                 yesIWantToUseGoogleMapApiInternals
//                 onGoogleApiLoaded={({ map, maps }) => Gmapss(map, maps)}
//                 >
                
//             </GoogleMapReact>
//         </div>
//     );
// }
// export default Gmapss;






