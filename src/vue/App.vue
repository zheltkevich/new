<template>
    <router-view :key="$route.path" />
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'App',
    data() {
        return {
            test: null,
        };
    },
    props: {
        ggg: {
            type: String,
            default: 'sfasf',
        },
    },
    methods: {
        ...mapActions('pwa', ['initAppInstall']),
        testMethod() {
            this.test = this.ggg;
        },
    },
    mounted() {
        this.initAppInstall();
        this.testMethod();
    },
};
</script>
