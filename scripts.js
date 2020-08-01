// let startingTimeInput= $("#starting-time");
// let endTimeInput= $("#endTime");

// let timeOut= endTimeInput-startingTimeInput;
// document.addEventListener('DOMContentLoaded', function(){

$("#basic-text1").on("click", function(event) {
 let zipCode= $("#zip-input").val();
  var queryURL1 =  "http://www.mapquestapi.com/geocoding/v1/address?key=3VwYjbEDllKLmOW06cKZ7AR0eDB8yG5W&location=" + zipCode 
  $.ajax({
    url: queryURL1,
    method: "GET"
  }).then(function(response) {
    console.log(response);

let lat = (response.results[0].locations[0].displayLatLng.lat);
let lon = (response.results[0].locations[0].displayLatLng.lng);

  var queryURL2 = "https://www.hikingproject.com/data/get-trails?lat="+lat+"&lon="+lon+"&maxDistance=10&key=200858356-bf647b28b50f236daa1cc71548dae05e";
  $.ajax({
    url: queryURL2,
    method: "GET"
  }).then(function(response) {
    console.log(response)

//  let trail1 = response.trails[0];
//  let trail2 = response.trails[1];
//  let trail3 = response.trails[2];
//  let trail4 = response.trails[3];
//  let trail5 = response.trails[4];


});
});
})

//translate to mileage radius
//estimate time on trail from round trip distance and some mile-per-hour speed
//timer function that compares your time on trail to others

