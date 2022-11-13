export default {
    namespaced: true,
    state: {
        deferredPrompt: null,
        showPromotion: false,
        appIstalled: false,
        beforeInstallPrompt: false,
    },
    getters: {
        isAppInstalled: state => state.appIstalled,
        showPromotion: state => state.showPromotion,
    },
    mutations: {
        SETUP_INSTALL_BUTTON: (state, payload) => {
            payload.addEventListener('click', async () => {
                state.deferredPrompt.prompt();

                const { outcome } = await state.deferredPrompt.userChoice;

                // eslint-disable-next-line no-console
                console.log(`User response to the install prompt: ${outcome}`);
                // eslint-disable-next-line require-atomic-updates
                state.deferredPrompt = null;
            });
        },
        INIT_APP_INSTALL: state => {
            window.addEventListener('beforeinstallprompt', e => {
                e.preventDefault();
                // eslint-disable-next-line no-console
                state.deferredPrompt = e;
                state.showPromotion = true;
                // eslint-disable-next-line no-console
                // eslint-disable-next-line no-console
                console.log('\'beforeinstallprompt\' was fired');
            });
            window.addEventListener('appinstalled', () => {
                state.appIstalled = true;
                state.deferredPrompt = null;
                state.showPromotion = false;
                // eslint-disable-next-line no-console
                console.log('PWA was installed');
            });
        },
    },
    actions: {
        initAppInstall: ({ commit }, payload) => {
            commit('INIT_APP_INSTALL', payload);
        },
        setupInstallButton: ({ commit }, payload) => {
            commit('SETUP_INSTALL_BUTTON', payload);
        },
    },
};
