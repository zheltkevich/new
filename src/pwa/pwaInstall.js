let deferredPrompt = null;

export const initButton = button => {
    button.addEventListener('click', async () => {
        // Hide the app provided install promotion
        // hideInstallPromotion();
        // Show the install prompt
        deferredPrompt.prompt();

        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;

        // Optionally, send analytics event with outcome of user choice
        // eslint-disable-next-line no-console
        console.log(`User response to the install prompt: ${outcome}`);
        // We've used the prompt, and can't use it again, throw it away
        // eslint-disable-next-line require-atomic-updates
        deferredPrompt = null;
    });
};

const showInstallPromotion = () => {
    // eslint-disable-next-line no-console
    console.log('showInstallPromotion');
};

const hideInstallPromotion = () => {
    // eslint-disable-next-line no-console
    console.log('hideInstallPromotion');
};

window.addEventListener('beforeinstallprompt', e => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI notify the user they can install the PWA
    showInstallPromotion();
    // Optionally, send analytics event that PWA install promo was shown.
    // eslint-disable-next-line no-console
    console.log('\'beforeinstallprompt\' event was fired.');
});

// eslint-disable-next-line no-console
// console.log('deferredPrompt: ', deferredPrompt);

// const buttonInstall = document.querySelector('#install-button');


window.addEventListener('appinstalled', () => {
    // Hide the app-provided install promotion
    hideInstallPromotion();
    // Clear the deferredPrompt so it can be garbage collected
    deferredPrompt = null;
    // Optionally, send analytics event to indicate successful install
    // eslint-disable-next-line no-console
    console.log('PWA was installed');
});
