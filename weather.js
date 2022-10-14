// my api key for open weather 4b10e0d30d2d231648ee51e44ca7d322


var appid = "4b10e0d30d2d231648ee51e44ca7d322";
var input = "Tokyo";
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + input + "&appid=" + appid;
var cityBtn = document.getElementById("search");

   
function weatherSearch(){
        cityBtn.addEventListener('click', weatherAsk);
    } 

fetch(queryURL, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     } ,
//     body: JSON.stringify({
        
//     })
}).then((response) => response.json())
    .then((data) => console.log(data));
    var city = document.getElementById("city")
    
    


 function weatherAsk(){
   
    loadJSON(queryURL, data);
        input = select("#citySearch")
        
    }







