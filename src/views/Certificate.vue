<script setup lang="ts">
import { computed } from "vue"
import { useRoute, useRouter } from "vue-router"

const router = useRouter()
const route = useRoute()

const userId = computed({
  get() {
    return route.query.userId ?? ""
  }
})

const verificationId = computed({
  get() {
    return route.query.verificationId ?? ""
  }
})

</script>

<template>
  <div class="h-screen w-screen bg-white flex">
    <div class="h-full w-full flex justify-center">
        <img class="absolute top-0 left-0 w-full" src="@/assets/certificate-template.svg" alt="Certificate Template"
        author="insspirito" original_url="pixabay.com/vectors/certificate-diploma-background-1237073/"/>
        <div class="h-full flex flex-col justify-center bg-slate-400">
          <h2>AboutView</h2>
          <p> userId: {{ userId }} </p>
          <p> verificationId: {{ verificationId }} </p>
        </div>
      </div>

    </div>
</template>
