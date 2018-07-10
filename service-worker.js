// If service workers are supported, and one isn't already registered
if ('serviceWorker' in navigator && !navigator.serviceWorker.controller) {
  navigator.serviceWorker.register('/OneSignalSDKWorker.js');
}
