<template>
  <div class="md-content">
    <div class="heading">
      <h1 class="title">
        {{ content.title }}
      </h1>
      <h2 class="subtitle">
        {{ content.subtitle }}
      </h2>
    </div>

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
.heading {
  margin: 3rem 0;
}

.title {
  margin-bottom: 0;

  font-size: 3rem;
  font-weight: normal;

  line-height: 1;
}

.subtitle {
  margin-top: 0;

  font-size: 2rem;
  font-weight: normal;
}
</style>
