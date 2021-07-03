
var request = new XMLHttpRequest();
request.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=aa693dc0c8f6aef41879516ccee3c985", true);

request.onreadystatechange = function() {
var data = JSON.parse(this.response)
var iconCode = data.weather[0].icon
var iconURL = 'http://openweathermap.org/img/wn/' + iconCode + '@2x.png'

    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("h1").innerHTML = data.name + ", " + data.sys.country
      document.getElementById("icon").src = iconURL
      document.getElementById("h3").innerHTML = data.weather[0].description
      document.getElementById("h2").innerHTML = data.main.temp + "°C"
      document.getElementById("h4first").innerHTML = "Feels like: " + data.main.feels_like + "°C"
      document.getElementById("h4second").innerHTML =  data.clouds.all + "% cloudiness, " + data.main.humidity + "% humidity"
      document.getElementById("h4third").innerHTML = "Wind speed: " + data.wind.speed + " meter/sec"
  } else {
    console.log('error')
  }

  if (data.main.temp >= 15) {
    document.body.style.background = "rgb(253,29,29); background: -moz-linear-gradient(90deg, rgba(253,29,29,1) 10%, rgba(252,176,69,1) 63%); background: -webkit-linear-gradient(90deg, rgba(253,29,29,1) 10%, rgba(252,176,69,1) 63%); background: linear-gradient(90deg, rgba(253,29,29,1) 10%, rgba(252,176,69,1) 63%); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fd1d1d',endColorstr='#fcb045',GradientType=1);";
  } else if (data.main.temp <= 0) {
    document.body.style.background = "rgb(238,174,202); background: -moz-radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(159,185,229,1) 52%, rgba(148,187,233,1) 98%); background: -webkit-radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(159,185,229,1) 52%, rgba(148,187,233,1) 98%); background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(159,185,229,1) 52%, rgba(148,187,233,1) 98%); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#eeaeca',endColorstr='#94bbe9',GradientType=1)";
  } else {
    document.body.style.background = "background: rgb(2,0,36); background: -moz-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,153,255,1) 70%); background: -webkit-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,153,255,1) 70%); background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,153,255,1) 70%); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#020024',endColorstr='#0099ff',GradientType=1);"
  }

};
request.send();
