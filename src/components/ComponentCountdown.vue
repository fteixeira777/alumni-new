<template>
  <main>
    <div class="countdown-block">
        <MyCountdown deadline="2022-09-24 00:00:00" labelColor="orange" :labels="{days: 'Dias',hours: 'Horas',minutes: 'Minutos',seconds: 'Segundos'}"></MyCountdown>
    </div>
    <div id="Content" class="wrapper">
        <div class="countdown styled"></div>
        <h3 class="intro">24 de Setembro de 2022</h3>
    </div>
  </main>
</template>
<script>
import {Countdown as MyCountdown} from 'vue3-flip-countdown'

  export default {
      components: { MyCountdown }
  }
</script>