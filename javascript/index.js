function updateTime () {
    let losAngelesElement = document.querySelector("#los-angeles");
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");


losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY")
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:m:ss [<small>]A[</small>]")



let parisElement = document.querySelector("#paris");
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");


parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY")
parisTimeElement.innerHTML = parisTime.format("h:m:ss [<small>]A[</small>]")





}







setInterval(updateTime, 1000)





function updateCity (event) {

    let cityTimeZone = event.target.value;
    let cityTime = moment().tz(cityTimeZone)
    console.log(cityTime.format("MMMM Do YYYY"))

    let citiesListElement = document.querySelector("#cities-list");
    citiesListElement.innerHTML = "Hello"
    
}


let citiesSelect = document.querySelector("#city-selection");
citiesSelectElement.addEventListener("change", updateCity);







