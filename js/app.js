var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

var thunder = "<div class='icon thunder-storm'><div class='cloud'></div><div class='lightning'><div class='bolt'></div><div class='bolt'></div></div></div>";

var rain = "<div class='icon rainy'><div class='cloud'></div><div class='rain'></div></div>";

var sun = "<div class='icon sunny'><div class='sun'><div class='rays'></div></div></div>";

var snow = "<div class='icon flurries'><div class='cloud'></div><div class='snow'><div class='flake'></div><div class='flake'></div></div></div>";

var clouds = "<div class='icon cloudy'><div class='cloud'></div><div class='cloud'></div></div>";

var sunnyrainy = "<div class='icon sun-shower'><div class='cloud'></div><div class='sun'><div class='rays'></div></div><div class='rain'></div></div>";

var sunnycloudy = "<div class='icon sun-shower'><div class='cloud'></div><div class='sun'><div class='rays'></div></div></div>";

var crd;

function success(pos) {

  crd = pos.coords;

  var href = "https://crossorigin.me/" + "http://api.openweathermap.org/data/2.5/weather?lat=" + crd.latitude + "&lon=" + crd.longitude + "&APPID=13548b49f1887f48648aeab312a35807";

  $.getJSON(href, function(json) {

    var html = "";

    var tempC = Math.round(json.main.temp - 273.15);

    var tempF = Math.round(json.main.temp * 9/5 - 459.67);

    var id = json.weather[0].id;

    html += "<p>" + json.name + " , " + json.sys.country + "<br>" + "Temperature: " + "<button class = 'klik'>" + tempC + " °C</button>" + "<br>" + "Weather description: " + json.weather[0].description;

    if (id == 801) {
      html += sunnycloudy + "</p>";
    }
    else if (id == 800) {
      html += sun + "</p>";
    }
    else if (id >= 200 && id <= 232) {
      html += thunder + "</p>";
    }
    else if (id >= 300 && id <= 321 || id >= 511 && id <= 531) {
      html += rain + "</p>";
    }
    else if (id >= 500 && id <= 504) {
      html += sunnyrainy + "</p>";
    }
    else if (id >= 600 && id <= 622) {
      html += snow + "</p>";
    }
    else if (id >= 802 && id <= 804) {
      html += clouds + "</p>";
    }

    $("#data").html(html);

    $(".klik").click(function(){
  var text = "";
    if ($(this).html() == tempC + " °C"){
       text = tempF + " °F";
    }else{
       text = tempC + " °C";
    }
    $(this).html(text)
});
     });

  console.log('Your current position is:');
  console.log('Latitude : ' + crd.latitude);
  console.log('Longitude: ' + crd.longitude);
  console.log('More or less ' + crd.accuracy + ' meters.');
  console.log(href);
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);
