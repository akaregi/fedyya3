<template>
  <div class="md-content">
    <h1 class="title">
      {{ content.title }}
    </h1>
    <h2 class="subtitle">
      {{ content.subtitle }}
    </h2>

    <nuxt-content :document="content" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'

export default Vue.extend({
  props: {
    content: {
      type: Object as PropType<IContentDocument | IContentDocument[]>,
      default: () => undefined
    }
  }
})
</script>

<style scoped>
.title {
  margin-bottom: 0;
}

.subtitle {
  margin-top: 0;
}
</style>
