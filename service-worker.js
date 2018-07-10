var OneSignal = window.OneSignal || [];
if (OneSignal.installServiceWorker) {
  OneSignal.installServiceWorker();
} else {
  if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/OneSignalSDKWorker.js?appId=0176567f-8774-4eaa-bb62-e9db8ec25d9c');
  }
}
