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




let italyElement = document.querySelector("#italy");
    let italyDateElement = italyElement.querySelector(".date");
    let italyTimeElement = italyElement.querySelector(".time");
    let italyTime = moment().tz("Europe/Italy");


italyDateElement.innerHTML = italyTime.format("MMMM Do YYYY")
italyTimeElement.innerHTML = italyTime.format("h:m:ss [<small>]A[</small>]")






let germanyElement = document.querySelector("#germany");
    let germanyDateElement = germanyElement.querySelector(".date");
    let germanyTimeElement = germanyElement.querySelector(".time");
    let germanyTime = moment().tz("Europe/Germany");


germanyDateElement.innerHTML = germanyTime.format("MMMM Do YYYY")
germanyTimeElement.innerHTML = germanyTime.format("h:m:ss [<small>]A[</small>]")




}

setInterval(updateTime, 1000)







