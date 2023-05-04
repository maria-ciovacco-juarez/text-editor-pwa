const butInstall = document.getElementById('buttonInstall');



// Logic for installing the PWA
// Add an event listener to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Save the event to be used later
  window.deferredPrompt = event;
});

// Add an event listener to the `click` event of the `butInstall` element
butInstall.addEventListener('click', async () => {
  // Get the saved event from the `beforeinstallprompt` event
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }

  // Show the install prompt
  promptEvent.prompt();

  // Wait for the user to respond to the prompt
  const { outcome } = await promptEvent.userChoice;

  // Reset the deferred prompt variable
  window.deferredPrompt = null;

  // Hide the install button if the user chooses to install
  if (outcome === 'accepted') {
    butInstall.classList.add('hidden');
  }
});

// Add an event listener to the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  // TODO: Add logic to handle the app installation
});

