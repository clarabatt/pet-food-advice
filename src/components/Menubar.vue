<template>
  <div class="menubar"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MenubarComponent',
  components: {}
})
</script>

<style>
.menubar {
  display: flex;
  width: 100%;
  height: 63.3px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  padding: 1rem 2rem;
}
</style>
