<template>
    <MainHeader />
    <MainContent />
    <MainFooter />
</template>

<script>
import MainHeader from '@components/MainHeader.vue';
import MainContent from '@components/MainContent.vue';
import MainFooter from '@components/MainFooter.vue';

export default {
    name: 'HomeView',
    components: {
        MainHeader,
        MainContent,
        MainFooter,
    },
};
</script>
