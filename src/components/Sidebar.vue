<template>
    <nav class="sidebar">
        <div class="sidebar-logo">
            <!-- <img src="/logo.png" alt="logo" /> -->
        </div>
        <ol class="sidebar-links">
            <SidebarItem v-for="link in links" :key="link.name" :name="link.name" :route="link.route" :icon="link.icon" />
        </ol>
    </nav>
</template>

<script lang="ts">
import { defineComponent, ref, type DefineComponent } from 'vue';
import { Square3Stack3DIcon, PencilSquareIcon, BellIcon, Cog6ToothIcon, LifebuoyIcon, UserIcon, ClipboardDocumentListIcon } from '@heroicons/vue/24/outline'; // Import icons as needed
import SidebarItem from './SidebarItem.vue';

interface Link {
    name: string;
    icon: DefineComponent;
    route: string;
    disabled: boolean;
}

export default defineComponent({
    name: 'SidebarComponent',
    components: {SidebarItem},
    setup() {
        const links = ref<Link[]>([
            { name: 'Dashboard', icon: Square3Stack3DIcon, route: '/', disabled: true },
            { name: 'Appointments', icon: UserIcon, route: '/', disabled: true },
            { name: 'Book vet appointment', icon: ClipboardDocumentListIcon, route: '/', disabled: true },
            { name: 'Prescriptions', icon: PencilSquareIcon, route: '/', disabled: true },
            { name: 'Notifications', icon: BellIcon, route: '/', disabled: true },
            { name: 'Help', icon: LifebuoyIcon, route: '/', disabled: true },
            { name: 'Account', icon: Cog6ToothIcon, route: '/', disabled: true },
        ]);

        return { links };
    }
});

</script>

<style>

.sidebar {
    display: flex;
    flex-direction: column;
    width: 256px;
    height: 100vh;
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
    padding: 1rem .5rem;
    color: #fff;
}
</style>