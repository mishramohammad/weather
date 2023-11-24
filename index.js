
function search(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    let cityElement = document.querySelector("#current-city");
  
    cityElement.innerHTML = searchInputElement.value;
  
    fetchTemperature(searchInputElement.value);
  }
  
  function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = date.getDay();
  
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    if (hours < 10) {
      hours = `0${hours}`;
    }
  
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
  
    let formattedDay = days[day];
    return `${formattedDay} ${hours}:${minutes}`;
  }
  
  async function fetchTemperature(city) {
    const apiKey = "56c1d271862dc7ad804963f2d40eaf8a"; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await axios.get(apiUrl);
      const temperature = response.data.main.temp;
  
      let temperatureElement = document.querySelector("#current-temperature");
      temperatureElement.innerHTML = Math.round(temperature);
    } catch (error) {
      console.error("Error fetching temperature:", error);
    }
  }
  
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", search);
  
  // Update current date
  let currentDateELement = document.querySelector("#current-date");
  let currentDate = new Date();
  currentDateELement.innerHTML = formatDate(currentDate);
  