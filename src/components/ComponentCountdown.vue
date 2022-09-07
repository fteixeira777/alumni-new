<template>
  <main>
    <div class="countdown-block">
        <MyCountdown deadline="2022-09-24 00:00:00" labelColor="gray" mainColor="white" :labels="{days: 'Dias',hours: 'Horas',minutes: 'Minutos',seconds: 'Segundos'}"></MyCountdown>
    </div>
    <div id="Content" class="wrapper">
        <div class="countdown styled"></div>
    </div>
  </main>
</template>
<script>
import {Countdown as MyCountdown} from 'vue3-flip-countdown'

  export default {
      components: { MyCountdown }
  }
</script>