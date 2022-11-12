<template>
    <router-link to="/">
        Go to Home
    </router-link>
    <router-link to="/about">
        Go to About
    </router-link>
    <router-view :key="$route.path" />
</template>

<script>
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
        testMethod() {
            this.test = this.ggg;
        },
    },
    mounted() {
        this.testMethod();
    },
};
</script>

<style lang="scss">
.test {
    padding: 12px;
}
</style>
