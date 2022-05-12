let myButton = document.getElementById("myButton")
let myWeatherResult2 = document.getElementsByClassName("myWeatherResult2")[0]
let xIcon = document.querySelector("i")

myButton.addEventListener('click', function(){
    let createDiv = document.createElement('div');
    createDiv.classList.add("myWeatherResult")
    myWeatherResult2.appendChild(createDiv)
    createDiv.appendChild(xIcon)
    createDiv.animate(
      { transform: 'translateY(0)'}, 
      {
        duration: 500,
        fill: 'forwards'
      })
      createDiv.style.margin = "15px"
      createDiv.style.flexBasis = "20%"


})



