let myButton = document.getElementById("myButton")
let myWeatherResult2 = document.getElementsByClassName("myWeatherResult2")[0]
// let xIcon = document.querySelector("i")

myButton.addEventListener('click', function(){
    let createDiv = document.createElement('div');
    let xIcon = document.createElement('i');
    createDiv.classList.add("myWeatherResult")
    xIcon.classList.add("fa-solid" ,"fa-xmark")
    createDiv.appendChild(xIcon)
    myWeatherResult2.appendChild(createDiv)
    createDiv.animate(
      { transform: 'translateY(0)'}, 
      {
        duration: 500,
        fill: 'forwards'
      })
      createDiv.style.margin = "15px"
      createDiv.style.flexBasis = "20%"
      
      // for(let i = 0; i < createDiv.length; i++){
       
      // }

})



