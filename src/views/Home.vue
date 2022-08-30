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
          inserted_at: new Date(),
        }

        let { error } = await supabase.from("pre-register").upsert(updates, {
          returning: "minimal", // Don't return the value after inserting
        })

        if (error) {
            //notify({ type: "error", text: error.details });
            throw error
        } else {
            notify({ type: "success", text: 'Thank you! You are now connected.' });
        }
      } catch (error) {
        //alert(error.message)
        notify({ type: "error", text: error.details });
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
                    <h1>Make your pre-registration</h1>

                    <div>
                      <input name="name" v-model="name" placeholder="Name" type="text" required class="normal-input"/>
                    </div>
                    <div style="padding-top:15px">
                      <input name="email" v-model="email" placeholder="Email" type="email" required class="normal-input"/>
                    </div>
                    <div style="padding-top:15px">
                      <input name="ano_matricula" v-model="ano_matricula" placeholder="Year of Enrollment" type="number" min="1990" max="2022" class="normal-input"/>
                    </div>
                    <div style="padding-top:15px">
                      <input name="phone" v-model="phone" placeholder="Phone" type="text" class="normal-input"/>
                    </div>
                    <div style="padding-top:15px">
                      <label for="shirt"><strong>Will you want a t-shirt?</strong></label>
                      <input name="shirt" v-model="shirt" placeholder="shirt" type="checkbox" class="input-checkbox"/>
                    </div>
                    <div v-if="shirt">
                      <input name="size" v-model="size" placeholder="Size" type="text" class="normal-input" required/>
                    </div>

                    <h3>Activities</h3>
                    <div>
                      <label for="karting"><strong>Karting</strong></label>
                      <input name="karting" v-model="karting" placeholder="Karting" type="checkbox" class="input-checkbox"/>
                    </div>
                    <div>
                      <label for="lasergame"><strong>Lasergame</strong></label>
                      <input name="lasergame" v-model="lasergame" placeholder="Lasergame" type="checkbox" class="input-checkbox"/>
                    </div>
                </div>
                <div class="form" style="padding-top:15px">
                    <button type="submit" class="btn">Submit</button>
                </div>
            </div>
            </form>
        </div>
    </div>
</template>
