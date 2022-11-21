<template>
    <router-view :key="$route.path" />
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'App',
    methods: {
        ...mapActions('pwa', ['initAppInstall']),
    },
    mounted() {
        this.initAppInstall();
    },
};
</script>
