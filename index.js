
let myButton = document.getElementById("myButton")
let myWeatherResult2 = document.querySelector(".myWeatherResult2")

let weather = {
  apiKey: "ce3e9e4b069b96c2ba48109ba76ff11c",

  fetchWeather: function(city){
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&appid=" +
      this.apiKey
    )
    .then((response)=>{
      if(!response.ok){
        alert("No Weather found.");
        throw new Error("No Weather found.");

      }
      return response.json();
    })
    .then((data)=>this.displayWeather(data));
  },
  displayWeather: function(data){
    const {name} = data;
    const {icon, description} = data.weather[0];
    const {temp, humidity} = data.main;
    const {speed} = data.wind;
    console.log(name)
    console.log(icon)

    // myButton.addEventListener('click', function(){

      console.log(name)
      console.log(icon)

      let createDiv = document.createElement('div');
      let xIcon = document.createElement('i');
      createDiv.classList.add("myWeatherResult")
      xIcon.classList.add("fa-solid" ,"fa-xmark")
      createDiv.appendChild(xIcon)
      let city1 = document.createElement('div')
      city1.innerHTML = "Waether in" + name;
      let icon1 = document.createElement('img')
      icon1.src ="https://openweathermap.org/img/wn/" + icon + "@2x.png"
      let description1 = document.createElement('div')
      description1.innerHTML = description;
      let temp1 = document.createElement('h1')
      temp1.innerHTML = temp + "°C";
      let humidity1 = document.createElement('div')
      humidity1.innerHTML = "Humidity: " + humidity + "%";
      let wind1 = document.createElement('div')
      wind1.innerHTML = "Wind speed: " + speed + "km/h";
      createDiv.appendChild(city1);
      createDiv.appendChild(icon1);
      createDiv.appendChild(description1);
      createDiv.appendChild(temp1);
      createDiv.appendChild(humidity1);
      createDiv.appendChild(wind1);
      myWeatherResult2.appendChild(createDiv);
    
    
      createDiv.animate(
        { transform: 'translateY(0)'}, 
        {
          duration: 500,
          fill: 'forwards'
        })
        createDiv.style.margin = "15px"
        createDiv.style.flexBasis = "20%"
        
        xIcon.addEventListener('click', function(){
          createDiv.remove()
        })
    
      
        
    
    // })
  
  },
  search: function(){
    this.fetchWeather(document.querySelector(".search_bar").value);

  },
  
  

}


  document.querySelector("#weather_form").onsubmit =  function (event) {
    event.preventDefault()
    console.log("submit")
    // if (event.key == "Enter") {
      weather.search();
    // }
  };

// weather.fetchWeather("Denver");


// let xIcon = document.querySelector("i")



