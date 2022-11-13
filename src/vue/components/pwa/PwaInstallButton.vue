<template>
    <button
        ref="pwaInstallButton"
        class="pwa-install-button"
        type="button">
        Install App
    </button>
</template>

<script>
import setupInstallButton from '@pwa/setupInstallButton.js';
export default {
    name: 'PwaInstallButton',
    mounted() {
        setupInstallButton(this.$refs?.pwaInstallButton);
    },
};
</script>
