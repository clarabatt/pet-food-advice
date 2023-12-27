<template>
    <nav class="sidebar">
        <div class="sidebar-logo">
            <!-- <img src="/logo.png" alt="logo" /> -->
        </div>
        <div class="sidebar-links">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/contact">Contact</router-link>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
name: 'SidebarComponent',
  components: {}
});

</script>

<style>

.sidebar {
    display: flex;
    width: 20.5%;
    height: 100vh;
    background-color: #423898;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 100;
}

.sidebar > .sidebar-links {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
    color: #fff;
}
</style>