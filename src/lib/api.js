const proxy = 'https://cors-anywhere.herokuapp.com/';
const API_KEY = '48e422dcb2bf153fbabf53a53d8edf65';
const API_URL = `${proxy}https://api.darksky.net/forecast/${API_KEY}/`;
const GEO_API_URL = `${proxy}https://darksky.net/geo?q=`;
const ADDRESS_API = `${proxy}https://darksky.net/rgeo?hires=1`;
function getForecast(lat,lng){
  return fetch(`${API_URL}${lat},${lng}`)
    .then(response => response.json());
}

function getCoordinates(location){
  return fetch(`${GEO_API_URL}${location}`)
      .then(response => response.json());
}

function getAddress(lat,lng){
  return fetch(`${ADDRESS_API}&lat=${lat}&lon=${lng}`)
    .then(response => response.json());
}
export default {
  getForecast,
  getCoordinates,
  getAddress
};
