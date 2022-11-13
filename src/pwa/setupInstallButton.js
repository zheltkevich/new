export const setupInstallButton = element => {
    // eslint-disable-next-line no-console
    console.log('setupInstallButton');

    let promptEvent = null;
    const installButton = element;

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
        // eslint-disable-next-line no-console
        console.log('beforeinstallprompt');
        event.preventDefault();
        promptEvent = event;
        installButton.style.display = 'flex';
        listenUserAction();
    });
};

export default setupInstallButton;
