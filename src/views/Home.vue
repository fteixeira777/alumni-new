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


    async function storeSubscriber() {
      try {
        loading.value = true

        const updates = {
          email: email.value,
          inserted_at: new Date(),
        }

        let { error } = await supabase.from("subscribers").upsert(updates, {
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
            <div class="form">
                <label for="email">Stay Connected! Leave your email.</label>
            </div>
            <form @submit.prevent="storeSubscriber">
            <div class="form-group">
                <div class="form">
                    <input name="email" v-model="email" placeholder="Email" type="email" required/>
                </div>
                <div class="form">
                    <button type="submit" class="btn">Submit</button>
                </div>
            </div>
            </form>
        </div>
    </div>
</template>
