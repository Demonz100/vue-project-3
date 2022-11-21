<template>
  <div class="about-page">
    This is about
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
    name: 'About'
})
</script>

<style>
.about-page{
    height: 100vh;
    max-width: 980px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>