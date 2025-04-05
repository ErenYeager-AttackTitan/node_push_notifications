console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.showNotification(data.title, {
    body: "Greatest Anime Of All Time Attack On Titan",
    icon: "https://mikasa-ackerman-cdn.pages.dev/shingeki-no-kyojin.webp"
  });
});
