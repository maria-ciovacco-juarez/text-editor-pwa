const butInstall = document.getElementById('buttonInstall');



// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  window.deferredPrompt = event;
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }

  // Show prompt
  promptEvent.prompt();

  // Wait for the user to respond to the prompt
  const { outcome } = await promptEvent.userChoice;

  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;

  // Hide the install button if the user chooses to install
  if (outcome === 'accepted') {
    butInstall.classList.add('hidden');
  }
});


  // Hide the install button
  butInstall.classList.add('hidden');
});


// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {});
