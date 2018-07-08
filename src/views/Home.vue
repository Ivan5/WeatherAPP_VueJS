<template>
  <div class="home">
    <h1>Home</h1>
    <pre>{{forecast.currently}}</pre>
  </div>
</template>

<script>
import API from '@/lib/api';
export default {
  data(){
    return {
      forecast : {}
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
