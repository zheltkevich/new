<template>
    <button
        id="install-button"
        class="pwa-install-button"
        type="button">
        Install App
    </button>
</template>

<script>
import PWA from '@pwa/pwa.js';
export default {
    name: 'PwaInstallButton',
    mounted() {
        PWA.setupInstallButton();
    },
};
</script>
