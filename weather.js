// my api key for open weather 4b10e0d30d2d231648ee51e44ca7d322

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={4b10e0d30d2d231648ee51e44ca7d322}
var appid = "4b10e0d30d2d231648ee51e44ca7d322";
var input = "orlando";
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + input + "&appid=" + appid;


var cityBtn = document.getElementById("search");



fetch(queryURL)
    .then((response) => response.json())
    .then((data) => console.log(data));
   
function weatherSearch(){
        cityBtn.addEventListener('click', weatherAsk);
    } 
 function weatherAsk(){
        loadJSON(queryURL, data);
        input = select("#citySearch")
    }







