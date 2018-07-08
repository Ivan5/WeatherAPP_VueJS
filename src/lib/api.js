const proxy = 'https://cors-anywhere.herokuapp.com/';
const API_KEY = '48e422dcb2bf153fbabf53a53d8edf65';
const location = '37.8267,-122.4233';
const API_URL = `${proxy}https://api.darksky.net/forecast/${API_KEY}/${location}`;

function getForecast(){
  fetch(API_URL)
    .then(response => response.json())
    .then(result => {
      console.log(result);
    })
}

export default{
  getForecast
}

