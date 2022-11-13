// Register service worker
// export const registerSW = () => {
//     if ('serviceWorker' in navigator) {
//         window.addEventListener('load', () => {
//             navigator.serviceWorker.register('./service-worker.js')
//                 .then(registration => {
//                     console.log('SW registered: ', registration); // eslint-disable-line no-console
//                 })
//                 .catch(registrationError => {
//                     console.log('SW registration failed: ', registrationError); // eslint-disable-line no-console
//                 });
//         });
//     }
// };

// Add the install button
export const setupInstallButton = () => {
    let promptEvent = null;
    const installButton = document.querySelector('#install-button');

    installButton.style.display = 'none';

    const userChoiseHandler = () => {
        promptEvent.prompt();
        promptEvent.userChoice.then(choise => {
            if (choise.outcome === 'accepted') {
                installButton.style.display = 'none';
                // eslint-disable-next-line no-console
                console.log('Application install was accepted');
            } else {
                // eslint-disable-next-line no-console
                console.log('Application install was declined by user');
            }

            promptEvent = null;
        });
    };

    const listenUserAction = () => {
        installButton.addEventListener('click', userChoiseHandler);
    };

    window.addEventListener('beforeinstallprompt', event => {
        event.preventDefault();
        promptEvent = event;
        installButton.style.display = 'flex';
        listenUserAction();
    });
};

const PWA = {
    // registerSW,
    setupInstallButton,
};

export default PWA;
