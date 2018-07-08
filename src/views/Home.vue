<template>
  <div class="home">
    <div class="row">
      <div class="col-8 offset-2 mt-2 text-center">
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
      forecast : {},
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
      }
    };
  },
  name: 'home',
  mounted(){
    API.getForecast()
      .then(result => {
        console.log(result);
        this.forecast = result;
      });
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
