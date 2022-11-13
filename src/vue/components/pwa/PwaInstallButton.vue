<template>
    <button
        id="install-button"
        class="pwa-install-button"
        type="button">
        Install App
    </button>
</template>

<script>
// import setupInstallButton from '@pwa/setupInstallButton.js';
import '@pwa/pwaInstall.js';
export default {
    name: 'PwaInstallButton',
    // mounted() {
    //     // eslint-disable-next-line no-console
    //     console.log('mounted: ', this.$refs.pwaInstallButton);

    //     if (this.$refs.pwaInstallButton) setupInstallButton(this.$refs.pwaInstallButton);
    // },
};
</script>
