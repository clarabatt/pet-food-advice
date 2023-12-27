<template>
    <li :class="{ 'disabled': isDisabled }">
        <component :is="icon" class="mr-4 h-6 w-6"/>
        <router-link to="route">{{ name }}</router-link>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
name: 'SidebarItemComponent',
props: {
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String
    },
    route: {
        type: String,
        required: true
    },
    isDisabled: {
        type: Boolean,
        default: false
    }
}
});

</script>

<style lang="scss">

@import '@/assets/variables.scss';

li {
    cursor: pointer;
    font-weight: 500;
    font-size: 1rem;
    font-family: "Inter", sans-serif;
    padding: 8px;
    margin-top: 4px;
    color: rgb(180 198 252);
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: all .2s ease-in-out;
}

li:hover {
    color: #fff;
    background-color: rgba(81, 69, 205);
    border-radius: 4px;
    transition: all .2s ease-in-out;
}

.active {
    color: #fff;
    background-color: rgba(54, 47, 120);
    border-radius: 4px;
}

.disabled {
    color: rgb(180 198 252 / .5);
    cursor: not-allowed;
}

</style>