
$(document).ready(function () {

  //modal function
  $(document).on("click", "a.local-rest", function () {
    restIndex = $(this).data('rest');
    $('.modal-content').empty();
    let restArray = restaurantArray[restIndex].restaurants;
    console.log(restArray)
   //adds content to modal
    restArray.forEach((restaurants, index) => {
     let restaurantDiv = $(`<div class='has-text-centered box mx-1 px-1' id='rest-${index}'>`) 
     let restaurantLink= $(`<a id='a-${index}' class='mb-1' target='_blank' href= ${JSON.stringify(restaurants.restaurant.url)}>${JSON.stringify(restaurants.restaurant.name)}</a></br>`)
     let restaurantLoc = $(`<p>${JSON.stringify(restaurants.restaurant.location.address)}</p>`)
     let cuisineP = $(`<p class='mb-1'>Cuisine(s): ${JSON.stringify(restaurants.restaurant.cuisines)}</p>`)
     let costForTwo = $(`<p class='mb-4'>Cost for 2: $${JSON.stringify(restaurants.restaurant.average_cost_for_two)}</p>`) 
     $(restaurantDiv).append(restaurantLink, restaurantLoc, cuisineP, costForTwo)
     $('.modal-content').append(restaurantDiv)
    });
    $('.modal').addClass('is-active');
  });
  //closes modal
  $('.modal-close').on('click', function () {
    $('.modal').removeClass('is-active');
  });


  // arrays for restaurants, trails
  var trails = [];
  var restaurantArray = [];
  //search function
  $("#basic-text1").on("click", function (event) {
    $("#display-results").empty();
    trails = [];
    restaurantArray = [];
    let zipCode = $("#zip-input").val();
    let milesDriving = $("#drive-time option:selected").val()
    var mapquestQuery = "https://www.mapquestapi.com/geocoding/v1/address?key=3VwYjbEDllKLmOW06cKZ7AR0eDB8yG5W&location=" + zipCode
   //first call for lat/long of zip
    $.ajax({
      url: mapquestQuery,
      method: "GET"
    }).then(function (response) {
      console.log(response)
      let lat = (response.results[0].locations[0].displayLatLng.lat);
      let lon = (response.results[0].locations[0].displayLatLng.lng);
      var hikingQuery = "https://www.hikingproject.com/data/get-trails?lat=" + lat + "&lon=" + lon + "&maxDistance=" + milesDriving + "&sort=distance&key=200858356-bf647b28b50f236daa1cc71548dae05e";
     
     //second call passes lat/long into trails query
      $.ajax({
        url: hikingQuery,
        method: "GET"
      }).then(function (response) {
        console.log(response)
        //loop to create trail cards
        for (let i = 0; i < 7; i++) {
          trails.push(response.trails[i]);
        }
        trails.forEach((trail, index) => {
          console.log("index: " + index)
          let hikeDiv = $(`<div class="column card title mx-2 mb-4 is-child" id="hike-${index}">`);
          let imgDiv = $(`<div class= 'image-overflow'>`);
          let img = $(`<img class='card-image is-4by2' src='${trail.imgMedium}'>`);
          $(imgDiv).append(img);
          let trailLong = trail.longitude;
          let trailLat = trail.latitude;
          let weatherQuery = "https://api.openweathermap.org/data/2.5/onecall?lat=" + trailLat + "&lon=" + trailLong + "&units=imperial&appid=e9b735c3398cfe4564ec31ab0eed5a07";
          //call for local weather data
          $.ajax({
            url: weatherQuery,
            method: "GET"
          }).done(function (weatherResponse) {
            let hikeWeather = weatherResponse.daily[0];
            //card content
            let hikeTitle = $("<a target='_blank'class= 'is-size-5 pt-3 has-text-weight-semibold' href="+trail.url+">"+trail.name+"</a></br>");
            let hikeTemp = $("<p class='is-size-6  pt-3'>").text("Temp: " + Math.floor(hikeWeather.temp.day)+ "°F")
            let hikeCond = $("<p class='is-size-6 pt-3'>").text("Conditions: " + hikeWeather.weather[0].main)
            let hikeRTDistance = $("<p class='is-size-6 pt-3'>").text("Trail Distance: " + trail.length + "mi.");
            let hikeCity = $("<p class='is-size-6 pt-3'>").text("Area: " + trail.location);
            let hikeDirectionsURL = ("https://www.google.com/maps/dir/?api=1&origin=" + zipCode + "&destination=" + trailLat + "," + trailLong + "&travelmode=driving")
            let hikeDirections = $("<a target='_blank' class='is-size-6 pt-3' href=" + hikeDirectionsURL + ">Driving Directions</a></br>")
            let hikeRestaurant = $(`<a class='local-rest is-size-6 pt-3' data-rest='${index}'>Local Restaurants</a>`);
            $(hikeDiv).append(imgDiv, hikeTitle, hikeTemp, hikeCond, hikeRTDistance, hikeCity, hikeDirections, hikeRestaurant);
            $("#display-results").append(hikeDiv);
            //call for restaurant data
            $.ajax({
              url: `https://developers.zomato.com/api/v2.1/search?lat=${trailLat}&lon=${trailLong}&radius=20000&sort=real_distance`,
              method: "GET",
              headers: {
                "user-key": "9985c76101ef1e92d780985a8cd4065f",
               
              }
            }).done(function (response) {
              console.log(response);
              //array for restarant data, linked to card index
              restaurantArray[index] = response;
            });
          });
        });
      });
    });
  });
});