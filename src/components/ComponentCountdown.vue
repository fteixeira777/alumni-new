<template>
  <main>
    <div class="countdown-block">
        <MyCountdown deadline="2022-09-24 00:00:00" labelColor="orange"></MyCountdown>
    </div>
    <div id="Content" class="wrapper">
        <div class="countdown styled"></div>
        <h2 class="intro">We're working hard to create something special!</h2>
        <h3 class="intro">September 24, 2022</h3>
    </div>
  </main>
</template>
<script>
import {Countdown as MyCountdown} from 'vue3-flip-countdown'

  export default {
      components: { MyCountdown }
  }
</script>