var options = {
  enableHighAccuracy: true,
  timeout: 7000,
  maximumAge: 0
};

var crd;

function success(pos) {

  crd = pos.coords;

  var href = 'https://api.apixu.com/v1/current.json?key=a2d0b94abdbc4be982183028170805&q=' + crd.latitude + "," + crd.longitude;

  console.log(href);

  $.getJSON(href, function(json) {

    var html = "";

    var tempC = json.current.temp_c;

    var tempF = json.current.temp_f;

    var condition = json.current.condition.text;

    var icon = 'https:' + json.current.condition.icon;


    html += "<p>" + json.location.name + " , " + json.location.country + "<br>" + "Temperature: " + "<button class = 'klik'>" + tempC + " °C</button>" + "<br>" + "Weather description: " + condition + "<br>" + "<img src='" + icon +"' alt='Weather conditions icon'>";


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

};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);
