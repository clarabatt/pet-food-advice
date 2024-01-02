<template>
  <div :class="['token', { isTokenActive: isActive }]" @click="handleClick">
    <div class="condition-icon">
      <!-- <img v-if="pictureUrl" :src="pictureUrl" alt="pet picture" />
      <img
        v-else-if="species === 'DOG'"
        class="placeholder"
        alt="pet icon placeholder"
        :src="dogIcon"
      /> -->
    </div>
    <p class="condition-name">{{ name }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@/types'
import dogIcon from '@/assets/icons/dog.png'

export default defineComponent({
  name: 'ConditionTokenComponent',
  components: {},
  props: {
    name: {
      type: String,
      required: true
    },
    iconUrl: {
      type: String,
      required: false
    },
    icon: {
      type: Object as Icon,
      required: false
    },
    isActive: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    handleClick() {
      this.$emit('childEvent', this.name)
    }
  },
  data() {
    return {
      dogIcon
    }
  }
})
</script>

<style lang="scss" scoped>
.token {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem 0.5rem;
  height: 6rem;
  width: 11rem;
  cursor: pointer;
  border: rgb(205 219 254) solid 1px;
  border-radius: 0.5rem;
  transition: all 0.15s ease-in-out;
}

.token:hover {
  outline: solid 2px rgb(104 117 245);
  transition: all 0.15s ease-in-out;
}
.isTokenActive {
  outline: solid 2px rgb(104 117 245);
  transition: all 0.15s ease-in-out;
}

.condition-image > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.condition-image > .placeholder {
  width: 3.5rem !important;
  object-fit: contain;
}

.condition-name {
  text-align: center;
  margin-top: 0.5rem;
  font-weight: 300;
  color: black;
}
</style>
@/sfc
