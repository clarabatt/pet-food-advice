<template>
  <nav class="sidebar">
    <div class="sidebar-logo">
      <!-- <img src="/logo.png" alt="logo" /> -->
    </div>
    <ol class="sidebar-links">
      <SidebarItem v-for="link in links" :key="link.name" :link="link" />
    </ol>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import {
  Square3Stack3DIcon,
  PencilSquareIcon,
  BellIcon,
  Cog6ToothIcon,
  LifebuoyIcon,
  UserIcon,
  SparklesIcon,
  ClipboardDocumentListIcon
} from '@heroicons/vue/24/outline'
import SidebarItem from './SidebarItem.vue'
import type { Link } from '@/types/Utils'

export default defineComponent({
  name: 'SidebarComponent',
  components: { SidebarItem },
  setup() {
    const links = ref<Link[]>([
      { name: 'Dashboard', icon: Square3Stack3DIcon, route: '/', disabled: false },
      { name: 'Appointments', icon: UserIcon, route: '/', disabled: true },
      { name: 'Book vet appointment', icon: ClipboardDocumentListIcon, route: '/', disabled: true },
      { name: 'Food Advice', icon: SparklesIcon, route: '/food-advice', disabled: false },
      { name: 'Prescriptions', icon: PencilSquareIcon, route: '/', disabled: true },
      { name: 'Notifications', icon: BellIcon, route: '/', disabled: true },
      { name: 'Help', icon: LifebuoyIcon, route: '/', disabled: true },
      { name: 'Account', icon: Cog6ToothIcon, route: '/', disabled: true }
    ])

    return { links }
  }
})
</script>

<style>
.sidebar {
  display: flex;
  flex-direction: column;
  width: 18rem;
  min-height: 100vh;
  background-color: #423898;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
}

.sidebar > .sidebar-logo {
  padding: 1.7rem;
}

.sidebar > .sidebar-links {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem 0.5rem;
  color: #fff;
}
</style>
