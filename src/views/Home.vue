<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/multi-word-component-names -->
<script>
import CountDown from '@/components/ComponentCountdown.vue';

import { supabase } from "../supabase"
import { store } from "../store"
import { onMounted, ref } from "vue"

import { notify } from "@kyvg/vue3-notification";




export default {
  setup() {
    const loading = ref(true)
    const email = ref("")
    const name = ref("")
    const ano_matricula = ref("")
    const phone = ref("")
    const karting = ref(0)
    const lasergame = ref(0)
    const shirt = ref(0)
    const size = ref("")
    const suggestions = ref("")
    const family = ref("")
    const family_number = ref(1)


    async function storeSubscriber() {
      try {
        loading.value = true

        const updates = {
          email: email.value,
          name: name.value,
          ano_matricula: ano_matricula.value,
          phone: phone.value,
          karting: karting.value,
          lasergame: lasergame.value,
          shirt: shirt.value,
          size: size.value,
          suggestions: suggestions.value,
          family: family.value,
          family_number: family_number.value,
          inserted_at: new Date(),
        }

        let { error } = await supabase.from("pre-register").upsert(updates, {
          returning: "minimal", // Don't return the value after inserting
        })

        if (error) {
            //notify({ type: "error", text: error.details });
            throw error
        } else {
            notify({ type: "success", text: 'Obrigado pelo teu interesse!' });
        }
      } catch (error) {
        //alert(error.message)
        if(error.code == "23505"){
          notify({ type: "error", text: "O teu email já está registado." });
        } else {
          notify({ type: "error", text: "Ocorreu um erro! Por favor tenta novamente mais tarde." });
        }
      } finally {
        loading.value = false;
        email.value = "";
        name.value = "";
        ano_matricula.value = "";
        phone.value = "";
        karting.value = 0;
        lasergame.value = 0;
        shirt.value = 0;
        size.value = "";
        suggestions.value = "";
        family.value = "";
        family_number.value = 1;
      }
    }

    return {
      email,
      name,
      ano_matricula,
      phone,
      karting,
      lasergame,
      shirt,
      size,
      suggestions,
      family,
      family_number,
      storeSubscriber
    }
  },
  components: {
    CountDown
  }
};
</script>

<template>
  <div class="container-fluid">
    <notifications position="top right" />
    <div class="row align-items-start">
      <div class="col col-12 col-md-4">
        <div class="row">
          <div class="col-12">
            <figure class="figure">
              <img src="../assets/anuncio.jpeg" class="figure-img img-fluid rounded" alt="anuncio">
            </figure>
          </div>
        </div>
      </div>
      <div class="col col-12 col-md-4 card shadow-lg p-3 mb-5 bg-body rounded">
        <!--<h4 class="intro">24 de Setembro de 2022</h4>-->
        <div class="center" style="padding-top:30px">
            <CountDown labelColor="white" mainColor="white" deadline="2022-09-24 00:00:00"></CountDown>
        </div>
        <div class="row align-items-start">
      <div class="col col-12">
        <div></div>
      </div>
    </div>
      </div>
      <div class="col">
        <div class="row">
          <div class="col-12">
            <figure class="figure">
              <img src="../assets/programa.jpeg" class="figure-img img-fluid rounded" alt="anuncio">
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>