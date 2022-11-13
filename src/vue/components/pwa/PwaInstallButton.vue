<template>
    <button
        ref="pwaInstallButton"
        id="install-button"
        class="pwa-install-button"
        type="button">
        Install App
    </button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'PwaInstallButton',
    methods: {
        ...mapActions('pwa', ['setupInstallButton']),
    },
    mounted() {
        this.setupInstallButton(this.$refs.pwaInstallButton);
    },
};
</script>
