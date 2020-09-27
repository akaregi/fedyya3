<template>
  <div class="page">
    <MdRenderer :content="content" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData ({ $content, params }) {
    const content = await $content(params.slug)
      .fetch()

    return { content }
  }
})
</script>
