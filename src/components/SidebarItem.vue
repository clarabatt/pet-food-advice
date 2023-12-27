<template>
  <li :class="{ disabled: link.disabled }">
    <component :is="link.icon" class="mr-4 h-6 w-6" />
    <router-link to="link.route">{{ link.name }}</router-link>
  </li>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type Link from '@/types/Utils'

export default defineComponent({
  name: 'SidebarItemComponent',
  props: {
    link: {
      type: Object as PropType<Link>,
      required: true
    }
  }
})
</script>

<style lang="scss">
@import '@/assets/variables.scss';

li {
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  padding: 8px;
  margin-top: 4px;
  color: rgb(180 198 252);
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: all 0.2s ease-in-out;
}

li:hover {
  color: #fff;
  background-color: rgba(81, 69, 205);
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
}

.active {
  color: #fff;
  background-color: rgba(54, 47, 120);
  border-radius: 4px;
}

.disabled {
  color: rgb(180 198 252 / 0.5);
  cursor: not-allowed;
}
</style>
