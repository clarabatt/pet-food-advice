<template>
  <Sidebar />
  <div class="main-panel">
    <Menubar />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
import Menubar from './components/Menubar.vue'
import { useUserStore } from '@/stores/userStore'

export default defineComponent({
  name: 'App',
  components: { Sidebar, Menubar, RouterView },
  setup() {
    const userStore = useUserStore()
    onMounted(() => {
      userStore.fetchUser()
    })
    return {}
  }
})
</script>

<style>
.main-panel {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

main {
  width: 80%;
  height: 90%;
  box-sizing: border-box;
  margin: 0 2rem;
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
</style>
