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
                // Hide the app provided install promotion
                // hideInstallPromotion();
                // Show the install prompt
                state.deferredPrompt.prompt();

                // Wait for the user to respond to the prompt
                const { outcome } = await state.deferredPrompt.userChoice;

                // Optionally, send analytics event with outcome of user choice
                // eslint-disable-next-line no-console
                console.log(`User response to the install prompt: ${outcome}`);
                // We've used the prompt, and can't use it again, throw it away
                // eslint-disable-next-line require-atomic-updates
                state.deferredPrompt = null;
            });
        },
        INIT_APP_INSTALL: (state, payload) => {
            window.addEventListener('beforeinstallprompt', e => {
                // Prevent the mini-infobar from appearing on mobile
                e.preventDefault();
                // Stash the event so it can be triggered later.
                // eslint-disable-next-line no-console
                console.log('payload: ', payload);
                state.deferredPrompt = e;
                state.showPromotion = true;
                // eslint-disable-next-line no-console
                console.log('state.showPromotion: ', state.showPromotion);
                // Update UI notify the user they can install the PWA
                // showInstallPromotion();
                // Optionally, send analytics event that PWA install promo was shown.
                // eslint-disable-next-line no-console
                console.log('\'beforeinstallprompt\' STORE.');
            });
            window.addEventListener('appinstalled', () => {
                // Hide the app-provided install promotion
                // hideInstallPromotion();
                // Clear the deferredPrompt so it can be garbage collected
                state.appIstalled = true;
                state.deferredPrompt = null;
                state.showPromotion = false;
                // Optionally, send analytics event to indicate successful install
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
