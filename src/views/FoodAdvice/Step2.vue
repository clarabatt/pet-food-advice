<template>
  <h1>Does {{ petName }} have any of those conditions?</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Step2View',
  props: {
    petName: {
      type: String,
      required: true
    }
  },
  components: {}
})
</script>

<style lang="scss">
h1 {
  text-align: center;
  margin-top: 6rem;
}
.pets {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}
</style>
