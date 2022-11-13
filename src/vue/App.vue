<template>
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
