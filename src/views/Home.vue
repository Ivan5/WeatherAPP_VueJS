<template>
  <div class="home">
    <div class="row">
      <div class="col-8 offset-2">
        <div class="input-group mb-3">
          <input v-model="location" type="text" class="form-control" placeholder="Search location">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" @click="updateLocation">Search</button>
          </div>
        </div>
      </div>
      <div class="col-8 offset-2 mt-2 text-center" v-if="forecast">
        <div class="card text-white bg-secondary mb-3">
          <div class="card-header">
            Current Weather
          </div>
          <div class="card-body">
            <h4 class="card-title">{{forecast.currently.summary}}</h4>
            <div class="card-text icon-temp">
              <span class="emoji"> {{icons[forecast.currently.icon]}}</span>
              {{forecast.currently.temperature}} °F
            </div>
            <div class="card-text">
              {{forecast.currently.precipProbability}} % chance of pre
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import API from '@/lib/api';
export default {
  data(){
    return {
      forecast : null,
      icons : {
        'clear-day' : '😎',
        'clear-night' : '🌝',
        'rain' : '☔',
        'snow' : '🌨',
        'sleet' : '❄',
        'wind' : '💨',
        'fog' : '🌬',
        'cloudy' : '☁',
        'partly-cloudy-day' : '☁',
        'partlye-cloudy-night' : '☁'
      },
      location: ''
    };
  },
  name: 'home',
  mounted(){
    this.loadWeather('37.8267','-122.4233')
  },
  methods :{
    updateLocation(){
      API.getCoordinates(this.location)
        .then(result => {
          this.loadWeather(result.latitude,result.longitude)
        });
    },
    loadWeather(lat,lng){
      API.getForecast(lat,lng)
      .then(result => {
        console.log(result);
        this.forecast = result;
      });
    }
  }
};
</script>
<style scoped>
body{
  font-size: 2em;
}
.icon-temp{
  font-size: 2em;
}
.emoji{
  font-size: 2em;
}
</style>
