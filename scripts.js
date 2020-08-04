// let startingTimeInput= $("#starting-time");
// let endTimeInput= $("#endTime");

// let timeOut= endTimeInput-startingTimeInput;
// document.addEventListener('DOMContentLoaded', function(){
  let milesDriving = $("#drive-time").val();
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

  var queryURL2 = "https://www.hikingproject.com/data/get-trails?lat="+lat+"&lon="+lon+"&maxDistance=200&key=200858356-bf647b28b50f236daa1cc71548dae05e";
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

  $("#display-results").empty();
   let firstHikeDiv= $("<div class= 'column' id= 'result-one'>");
   let imgOne = $("<img src=" +trail1.imgSmall+">")
   let trailOneLong = trail1.longitude;
   let trailOneLat = trail1.latitude;
   let hikeOneQueryURL = "https://api.openweathermap.org/data/2.5/onecall?lat="+trailOneLat+"&lon="+trailOneLong+"&units=imperial&appid=e9b735c3398cfe4564ec31ab0eed5a07";
   
   $.ajax({
    url: hikeOneQueryURL,
    method: "GET"
  }).then(function(response) {
   let hikeOneWeather= response.daily[0];
  
   
   let hikeOneTitle = $("<h5>").text(trail1.name);
   let hikeOneTemp = $("<h5>").text("Temp: "+hikeOneWeather.temp.day)
   let hikeOneCond = $("<h5>").text("Cond: "+hikeOneWeather.weather[0].main)
   let hikeOneRTDistance = $("<h5>").text("Round Trip Distance: "+ trail1.length);
   let hikeOneDifficulty= $("<h6>").text("Difficulty: "+ trail1.difficulty);
   let hikeOneDirectionsURL = ("https://www.google.com/maps/dir/?api=1&origin="+zipCode+"&destination="+trailOneLat+","+trailOneLong+"&travelmode=driving")
  let hikeOneDirections = $("<a href="+hikeOneDirectionsURL+">Driving Directions</a>")
   // var hikeOneDrive= $("<p>").text("");
   $(firstHikeDiv).append(imgOne, hikeOneTitle, hikeOneTemp, hikeOneCond, hikeOneRTDistance, hikeOneDifficulty, hikeOneDirections);
   $("#display-results").append(firstHikeDiv);
  });


   var secondHikeDiv= $("<div class='column' id= 'result-two'>");
   var imgTwo = $("<img src=" +trail2.imgSmall+">");
   let trailTwoLong = trail2.longitude;
   let trailTwoLat = trail2.latitude;
   
   var hikeTwoQueryURL = "https://api.openweathermap.org/data/2.5/onecall?lat="+trailTwoLat+"&lon="+trailTwoLong+"&units=imperial&appid=e9b735c3398cfe4564ec31ab0eed5a07";
    $.ajax({
    url: hikeTwoQueryURL,
    method: "GET"
  }).then(function(response) {
    let hikeTwoWeather= response.daily[0];
    let hikeTwoTitle = $("<h5>").text(trail2.name);
   let hikeTwoTemp = $("<h5>").text("Temp: "+hikeTwoWeather.temp.day)
   let hikeTwoCond = $("<h5>").text("Cond: "+hikeTwoWeather.weather[0].main)
   let hikeTwoRTDistance = $("<h5>").text("Round Trip Distance: "+ trail2.length);
   let hikeTwoDifficulty= $("<h6>").text("Difficulty: "+ trail2.difficulty);
   let hikeTwoDirectionsURL = ("https://www.google.com/maps/dir/?api=1&origin="+zipCode+"&destination="+trailTwoLat+","+trailTwoLong+"&travelmode=driving")
  let hikeTwoDirections = $("<a href="+hikeTwoDirectionsURL+">Driving Directions</a>")
   // var hikeOneDrive= $("<p>").text("");
   $(secondHikeDiv).append(imgTwo, hikeTwoTitle, hikeTwoTemp, hikeTwoCond, hikeTwoRTDistance, hikeTwoDifficulty, hikeTwoDirections);
   $("#display-results").append(secondHikeDiv);
  });
  
   var thirdHikeDiv= $("<div class=<div class='column' id= 'result-three'>");
   var imgThree = $("<img src=" +trail3.imgSmall+">")
   let trailThreeLong = trail3.longitude;
   let trailThreeLat = trail3.latitude;
   
   var hikeThreeQueryURL = "https://api.openweathermap.org/data/2.5/onecall?lat="+trailThreeLat+"&lon="+trailThreeLong+"&units=imperial&appid=e9b735c3398cfe4564ec31ab0eed5a07";
    $.ajax({
    url: hikeThreeQueryURL,
    method: "GET"
  }).then(function(response) {
    let hikeThreeWeather= response.daily[0];
   var hikeThreeTitle = $("<h5>").text(trail3.name);
   let hikeThreeTemp = $("<h5>").text("Temp: "+hikeThreeWeather.temp.day)
   let hikeThreeCond = $("<h5>").text("Cond: "+hikeThreeWeather.weather[0].main)
   var hikeThreeRTDistance = $("<h5>").text("Round Trip Distance: "+ trail3.length);
   var hikeThreeDifficulty= $("<h6>").text("Difficulty: "+ trail3.difficulty);
   let hikeThreeDirectionsURL = ("https://www.google.com/maps/dir/?api=1&origin="+zipCode+"&destination="+trailThreeLat+","+trailThreeLong+"&travelmode=driving")
  let hikeThreeDirections = $("<a href="+hikeThreeDirectionsURL+">Driving Directions</a>")
   // var hikeOneDrive= $("<p>").text("");
   $(thirdHikeDiv).append(imgThree, hikeThreeTitle, hikeThreeTemp, hikeThreeCond, hikeThreeRTDistance, hikeThreeDifficulty, hikeThreeDirections);
   $("#display-results").append(thirdHikeDiv);
  });
   var fourthHikeDiv= $("<div class='column' id= 'result-four'>");
   var imgFour = $("<img src=" +trail4.imgSmall+">")
   let trailFourLong = trail4.longitude;
   let trailFourLat = trail4.latitude;
   
   var hikeFourQueryURL = "https://api.openweathermap.org/data/2.5/onecall?lat="+trailFourLat+"&lon="+trailFourLong+"&units=imperial&appid=e9b735c3398cfe4564ec31ab0eed5a07";
    $.ajax({
    url: hikeFourQueryURL,
    method: "GET"
  }).then(function(response) {
    let hikeFourWeather= response.daily[0];
   var hikeFourTitle = $("<h5>").text(trail4.name);
   let hikeFourTemp = $("<h5>").text("Temp: "+hikeFourWeather.temp.day)
   let hikeFourCond = $("<h5>").text("Cond: "+hikeFourWeather.weather[0].main)
   var hikeFourRTDistance = $("<h5>").text("Round Trip Distance: "+ trail4.length);
   var hikeFourDifficulty= $("<h6>").text("Difficulty: "+ trail4.difficulty);
   let hikeFourDirectionsURL = ("https://www.google.com/maps/dir/?api=1&origin="+zipCode+"&destination="+trailFourLat+","+trailFourLong+"&travelmode=driving")
  let hikeFourDirections = $("<a href="+hikeFourDirectionsURL+">Driving Directions</a>")
   // var hikeOneDrive= $("<p>").text("");
   $(fourthHikeDiv).append(imgFour, hikeFourTitle, hikeFourTemp, hikeFourCond, hikeFourRTDistance, hikeFourDifficulty, hikeFourDirections);
   $("#display-results").append(fourthHikeDiv);
  });

   var fifthHikeDiv= $("<div class='column' id= 'result-five'>");
   var imgFive = $("<img src=" +trail5.imgSmall+">")
   let trailFiveLong = trail5.longitude;
   let trailFiveLat = trail5.latitude;
   
   var hikeFiveQueryURL = "https://api.openweathermap.org/data/2.5/onecall?lat="+trailFiveLat+"&lon="+trailFiveLong+"&units=imperial&appid=e9b735c3398cfe4564ec31ab0eed5a07";
    $.ajax({
    url: hikeFiveQueryURL,
    method: "GET"
  }).then(function(response) {
    let hikeFiveWeather= response.daily[0];
   var hikeFiveTitle = $("<h5>").text(trail5.name);
   let hikeFiveTemp = $("<h5>").text("Temp: "+hikeFiveWeather.temp.day)
   let hikeFiveCond = $("<h5>").text("Cond: "+hikeFiveWeather.weather[0].main)
   let hikeFiveRTDistance = $("<h5>").text("Round Trip Distance: "+ trail5.length);
   let hikeFiveDifficulty= $("<h6>").text("Difficulty: "+ trail5.difficulty);
  let hikeFiveDirectionsURL = ("https://www.google.com/maps/dir/?api=1&origin="+zipCode+"&destination="+trailFiveLat+","+trailFiveLong+"&travelmode=driving")
  let hikeFiveDirections = $("<a href="+hikeFiveDirectionsURL+">Driving Directions</a>")
  // var hikeOneDrive= $("<p>").text("");
   $(fifthHikeDiv).append(imgFive, hikeFiveTitle, hikeFiveTemp, hikeFiveCond, hikeFiveRTDistance, hikeFiveDifficulty, hikeFiveDirections);
   $("#display-results").append(fifthHikeDiv);
  });
});
});
})

//translate to mileage radius
//estimate time on trail from round trip distance and some mile-per-hour speed
//timer function that compares your time on trail to others

