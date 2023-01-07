function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");

    losAngelesDateElement.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("dddd, MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("h:mm:ss A");
  }
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");

    parisDateElement.innerHTML = moment()
      .tz("Europe/Paris")
      .format("dddd, MMMM Do YYYY");
    parisTimeElement.innerHTML = moment()
      .tz("Europe/Paris")
      .format("h:mm:ss A");
  }
  let cairoElement = document.querySelector("#cairo");
  if (cairoElement) {
    let cairoDateElement = cairoElement.querySelector(".date");
    let cairoTimeElement = cairoElement.querySelector(".time");

    cairoDateElement.innerHTML = moment()
      .tz("Africa/Cairo")
      .format("dddd, MMMM Do YYYY");
    cairoTimeElement.innerHTML = moment()
      .tz("Africa/Cairo")
      .format("h:mm:ss A");
  }
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");

    tokyoDateElement.innerHTML = moment()
      .tz("Asia/Tokyo")
      .format("dddd, MMMM Do YYYY");
    tokyoTimeElement.innerHTML = moment().tz("Asia/Tokyo").format("h:mm:ss A");
  }
}
setInterval(updateTime, 1000);

function changeCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#localInfo");
  citiesElement.innerHTML = `<div id="localInfo">
        It is <span class="localTime">${cityTime.format("h:mm A")}</span> in
        <span class="localCity">${cityName}</span> on <span class="currentDate">${cityTime.format(
    "dddd, MMMM Do YYYY"
  )}</span>
      </div>`;
}

citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", changeCity);
