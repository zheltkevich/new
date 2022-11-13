<template>
    <button
        v-show="showPromotion"
        ref="pwaInstallButton"
        id="install-button"
        class="pwa-install-button"
        type="button">
        Install App
    </button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'PwaInstallButton',
    computed: {
        ...mapGetters('pwa', ['showPromotion']),
    },
    methods: {
        ...mapActions('pwa', ['setupInstallButton']),
    },
    watch: {
        showPromotion(val) {
            // eslint-disable-next-line no-console
            console.log('watch: ', val);
        },
    },
    mounted() {
        // eslint-disable-next-line no-console
        console.log('mounted: ', this.showPromotion);
        this.setupInstallButton(this.$refs.pwaInstallButton);
    },
};
</script>
