<template>
  <button type="button" class="btn" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonComponent',
  emits: ['click'],
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
})
</script>

<style lang="scss">
.btn {
  font-size: 1.125rem;
  line-height: 1.75rem;
  padding: 1rem 1.5rem;
  border-style: solid;
  border-color: #e5e7eb;
  color: #fff;
  background-color: rgb(190 24 93);
  transition: all 0.15s ease-in-out;
  border-radius: 0.375rem;
  width: 18rem;
  font-weight: 400;
}

.btn:hover {
  background-color: rgb(131 24 67);
  transition: all 0.15s ease-in-out;
}
</style>
