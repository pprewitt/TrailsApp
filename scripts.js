// let startingTimeInput= $("#starting-time");
// let endTimeInput= $("#endTime");
let zipCode= 80207;
// let timeOut= endTimeInput-startingTimeInput;
// document.addEventListener('DOMContentLoaded', function(){
 
  var queryURL1 =  "https://api.opencagedata.com/geocode/v1/json?q=" + zipCode + "&key=e1c6870eeb7d44e69f034519c3cdbce3"
  $.ajax({
    url: queryURL1,
    method: "GET"
  }).then(function(response) {
    console.log(response);

let lat = (response.results[0].geometry.lat);
let lon = (response.results[0].geometry.lng);

  var queryURL2 = "https://www.hikingproject.com/data/get-trails?lat="+lat+"&lon="+lon+"&maxDistance=10&key=200858356-bf647b28b50f236daa1cc71548dae05e";
  $.ajax({
    url: queryURL2,
    method: "GET"
  }).then(function(response) {
    console.log(response)

 let trail1 = response.trails[0];
 let trail2 = response.trails[1];
 let trail3 = response.trails[2];
 let trail4 = response.trails[3];
 let trail5 = response.trails[4];


});
});

//translate to mileage radius
//estimate time on trail from round trip distance and some mile-per-hour speed
//timer function that compares your time on trail to others

