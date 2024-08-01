<script setup lang="ts">
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const name = ref<string>("")
const tittle = ref<string>("")

const goToCertificate = (e: Event) => {
  e.preventDefault()
  const encoded_name: string = window.btoa(name.value)
  const encoded_tittle: string = window.btoa(tittle.value)
  console.log(encoded_name, encoded_tittle)
  router.push({ name: "Certificate", query: { userId: encoded_name, verificationId: encoded_tittle } })
}

</script>

<template>
  <h2>Bullshit and hot air training</h2>
  <form class="flex flex-col justify-start" :onsubmit="goToCertificate">
    <label class="flex justify-start" for="name">
      <span>
        Name:
      </span>
      <input type="text" placeholder="Name" v-model="name" />
    </label>
    <label for="tittle">
      <span>
        Tittle you want to apply for:
      </span>
      <input type="text" placeholder="Tittle" v-model="tittle" />
    </label>
    <button class="bg-blue-400 rounded-lg" type="submit">Submit</button>
  </form>
</template>
