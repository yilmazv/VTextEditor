const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
let Prompt;

window.addEventListener('beforeinstallprompt', (event) => {
    Prompt = event;
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (Prompt !== null) {
        Prompt.prompt();
        const { outcome } = await Prompt.userChoice;
        if (outcome === 'accepted') {
            Prompt = null;
        }
    }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    textHeader.textContent = "Successfully installed"
    console.log("appinstalled", event)
});
