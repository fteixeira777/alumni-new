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
    const karting = ref("")
    const lasergame = ref("")
    const shirt = ref("")
    const size = ref("")
    const suggestions = ref("")
    const family = ref("")
    const family_number = ref("")


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
        loading.value = false
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
    <div class="countdown">
        <notifications position="top right" />
        <div class="col-md-12 col-sm-12">
            <div class="home-title">
                <h1>ALUMNI EI - UTAD</h1>
            </div>
            <div class="center">
                <CountDown labelColor="#fff" mainColor="orange" deadline="2022-09-24 00:00:00"></CountDown>
            </div>
            <form @submit.prevent="storeSubscriber">
            <div class="form-group">
                <div class="form">
                    <h1>Faz a tua pré-inscrição</h1>

                    <div>
                      <input name="name" v-model="name" placeholder="Nome" type="text" required class="normal-input"/>
                    </div>
                    <div style="padding-top:15px">
                      <input name="email" v-model="email" placeholder="Email" type="email" required class="normal-input"/>
                    </div>
                    <div style="padding-top:15px">
                      <input name="ano_matricula" v-model="ano_matricula" placeholder="Ano da 1ª matrícula" type="number" min="1990" max="2022" class="normal-input"/>
                    </div>
                    <div style="padding-top:15px">
                      <input name="phone" v-model="phone" placeholder="Telemóvel" type="text" class="normal-input"/>
                    </div>
                    <div style="padding-top:15px">
                      <label for="shirt"><strong>Vais querer comprar t-shirt?</strong></label>
                      <!--<input name="shirt" v-model="shirt" placeholder="shirt" type="checkbox" class="input-checkbox"/>-->
                      <div>
                        <select v-model="shirt" name="shirt" required style="margin-left:10px" class="normal-input">
                          <option value="" selected disabled>Seleciona uma opção...</option>
                          <option value="1">Sim</option>
                          <option value="0">Não</option>
                        </select>
                      </div>
                    </div>
                    <div v-if="shirt == '1'" style="padding-top:15px">
                      <input name="size" v-model="size" placeholder="Size" type="text" class="normal-input" required/>
                    </div>



                    <div style="padding-top:15px">
                      <label for="family"><strong>Vens com familiares?</strong></label>
                      <!--<input name="shirt" v-model="shirt" placeholder="shirt" type="checkbox" class="input-checkbox"/>-->
                      <div>
                        <select v-model="family" name="family" required style="margin-left:10px" class="normal-input">
                          <option value="" selected disabled>Seleciona uma opção...</option>
                          <option value="1">Sim</option>
                          <option value="0">Não</option>
                        </select>
                      </div>
                    </div>
                    <div v-if="family == '1'" style="padding-top:15px">
                      <select v-model="family_number" required class="normal-input">
                          <option value="" selected disabled>Número de elementos...</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                    </div>


                    <h3>Atividades</h3>
                    <div>
                      <label for="karting"><strong>Karting</strong></label>
                      <div>
                        <select v-model="karting" required class="normal-input">
                          <option value="" selected disabled>Seleciona uma opção...</option>
                          <option value="1">Sim</option>
                          <option value="0">Não</option>
                        </select>
                      </div>
                      <!--<input name="karting" v-model="karting" placeholder="Karting" type="checkbox" class="input-checkbox"/>-->
                    </div>
                    <div style="padding-top:15px">
                      <label for="lasergame"><strong>Lasergame</strong></label>
                      <div>
                        <select v-model="lasergame" required class="normal-input">
                          <option value="" selected disabled>Seleciona uma opção...</option>
                          <option value="1">Sim</option>
                          <option value="0">Não</option>
                        </select>
                      </div>
                      <!--<input name="lasergame" v-model="lasergame" placeholder="Lasergame" type="checkbox" class="input-checkbox"/>-->
                    </div>

                    <div style="padding-top:15px">
                      <textarea name="suggestions" id="suggestions" placeholder="Sugestões" v-model="suggestions" cols="30" rows="10" class="normal-input"></textarea>
                    </div>
                </div>
                <div class="form" style="padding-top:15px">
                    <button type="submit" class="btn">Submeter pré-inscrição</button>
                </div>

                <div class="whatsapp">
                  <a style="color:orange" href="https://chat.whatsapp.com/H7sJ9gyHfHH5YbhfLQ72Ww" target="_blank">
                    <img src="../assets/whatsapp.png" width="100%"/>
                  </a>
                </div>
            </div>
            </form>
        </div>
    </div>
</template>
