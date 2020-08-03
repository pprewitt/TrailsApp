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


   var firstHikeDiv= $("<div class=>");
   var imgOne = $("<img src=" +trail1.imgSmall+">")
   var hikeOneTitle = $("<h5>").text(trail1.name);
   var hikeOneRTDistance = $("<h5>").text("Round Trip Distance: "+ trail1.length);
   var hikeOneDifficulty= $("<h6>").text("Difficulty: "+ trail1.difficulty);
   // var hikeOneDrive= $("<p>").text("");
   $(firstHikeDiv).append(imgOne, hikeOneTitle, hikeOneRTDistance, hikeOneDifficulty);
   $("#display-results").append(firstHikeDiv);

   var secondHikeDiv= $("<div class=>");
   var imgTwo = $("<img src=" +trail2.imgSmall+">")
   var hikeTwoTitle = $("<h5>").text(trail2.name);
   var hikeTwoRTDistance = $("<h5>").text("Round Trip Distance: "+ trail2.length);
   var hikeTwoDifficulty= $("<h6>").text("Difficulty: "+ trail2.difficulty);
   // var hikeOneDrive= $("<p>").text("");
   $(secondHikeDiv).append(imgTwo, hikeTwoTitle, hikeTwoRTDistance, hikeTwoDifficulty);
   $("#display-results").append(secondHikeDiv);

   var thirdHikeDiv= $("<div class=>");
   var imgThree = $("<img src=" +trail3.imgSmall+">")
   var hikeThreeTitle = $("<h5>").text(trail3.name);
   var hikeThreeRTDistance = $("<h5>").text("Round Trip Distance: "+ trail3.length);
   var hikeThreeDifficulty= $("<h6>").text("Difficulty: "+ trail3.difficulty);
   // var hikeOneDrive= $("<p>").text("");
   $(thirdHikeDiv).append(imgThree, hikeThreeTitle, hikeThreeRTDistance, hikeThreeDifficulty);
   $("#display-results").append(thirdHikeDiv);

   var fourthHikeDiv= $("<div class=>");
   var imgFour = $("<img src=" +trail4.imgSmall+">")
   var hikeFourTitle = $("<h5>").text(trail4.name);
   var hikeFourRTDistance = $("<h5>").text("Round Trip Distance: "+ trail4.length);
   var hikeFourDifficulty= $("<h6>").text("Difficulty: "+ trail4.difficulty);
   // var hikeOneDrive= $("<p>").text("");
   $(fourthHikeDiv).append(imgFour, hikeFourTitle, hikeFourRTDistance, hikeFourDifficulty);
   $("#display-results").append(fourthHikeDiv);

   var fifthHikeDiv= $("<div class=>");
   var imgFive = $("<img src=" +trail5.imgSmall+">")
   var hikeFiveTitle = $("<h5>").text(trail5.name);
   var hikeFiveRTDistance = $("<h5>").text("Round Trip Distance: "+ trail5.length);
   var hikeFiveDifficulty= $("<h6>").text("Difficulty: "+ trail5.difficulty);
   // var hikeOneDrive= $("<p>").text("");
   $(fifthHikeDiv).append(imgFive, hikeFiveTitle, hikeFiveRTDistance, hikeFiveDifficulty);
   $("#display-results").append(fifthHikeDiv);

});
});
})

//translate to mileage radius
//estimate time on trail from round trip distance and some mile-per-hour speed
//timer function that compares your time on trail to others

