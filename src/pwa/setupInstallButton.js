export const setupInstallButton = element => {
    console.log('setupInstallButton'); // eslint-disable-line no-console

    let promptEvent = null;
    const installButton = element;

    installButton.style.display = 'none';

    const userChoiseHandler = () => {
        promptEvent.prompt();
        promptEvent.userChoice.then(choise => {
            if (choise.outcome === 'accepted') {
                installButton.style.display = 'none';
                console.log('Application install was accepted'); // eslint-disable-line no-console
            } else {
                console.log('Application install was declined by user'); // eslint-disable-line no-console
            }

            promptEvent = null;
        });
    };

    const listenUserAction = () => {
        installButton.addEventListener('click', userChoiseHandler);
    };

    window.addEventListener('beforeinstallprompt', event => {
        console.log('beforeinstallprompt'); // eslint-disable-line no-console
        event.preventDefault();
        promptEvent = event;
        installButton.style.display = 'flex';
        listenUserAction();
    });

    window.addEventListener('appinstalled', event => {
        console.log('Application was installed', event); // eslint-disable-line no-console
    });
};

export default setupInstallButton;
