function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");

  losAngelesDateElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("dddd, MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("h:mm:ss A");

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");

  parisDateElement.innerHTML = moment()
    .tz("Europe/Paris")
    .format("dddd, MMMM Do YYYY");
  parisTimeElement.innerHTML = moment().tz("Europe/Paris").format("h:mm:ss A");

  let cairoElement = document.querySelector("#cairo");
  let cairoDateElement = cairoElement.querySelector(".date");
  let cairoTimeElement = cairoElement.querySelector(".time");

  cairoDateElement.innerHTML = moment()
    .tz("Africa/Cairo")
    .format("dddd, MMMM Do YYYY");
  cairoTimeElement.innerHTML = moment().tz("Africa/Cairo").format("h:mm:ss A");

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");

  tokyoDateElement.innerHTML = moment()
    .tz("Asia/Tokyo")
    .format("dddd, MMMM Do YYYY");
  tokyoTimeElement.innerHTML = moment().tz("Asia/Tokyo").format("h:mm:ss A");
}
setInterval(updateTime, 1000);
