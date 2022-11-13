<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__buttons-wrapper">
                <PwaInstallButton
                    v-show="showPromotion"
                    class="footer__button surface2-cta rad-shadow-cta hover"
                    type="button" />
                <a
                    class="footer__button surface2-cta rad-shadow-cta hover"
                    href="https://github.com/zheltkevich/template#readme"
                    target="_blank"
                    rel="noopener noreferrer">
                    Get started
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
import PwaInstallButton from '@components/pwa/PwaInstallButton.vue';
import { mapGetters } from 'vuex';
export default {
    name: 'MainFooter',
    components: {
        PwaInstallButton,
    },
    computed: {
        ...mapGetters('pwa', ['showPromotion']),
    },
};
</script>
