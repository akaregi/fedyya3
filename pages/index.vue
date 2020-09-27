<template>
  <div class="index">
    <MdRenderer :content="index" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData ({ $content }) {
    return { index: await $content('index').fetch() }
  }
})
</script>
